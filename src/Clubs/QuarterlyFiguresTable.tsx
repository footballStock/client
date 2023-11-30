import React, {useMemo} from 'react';
import {Column} from 'react-table';
import TableSheet from '../MainOverview/TableSheet';

interface TableData {
  metric: string;
  [period: string]: string | number;
}

const QuarterlyFiguresTable = ({
  datas,
  names,
  periods,
}: {
  datas: number[][];
  names: string[];
  periods: string[];
}) => {
  const columns: Column<TableData>[] = useMemo(
    () => [
      {
        Header: 'Metric',
        accessor: 'metric', // accessor is the "key" in the data
      },
      ...periods.map((period, index) => ({
        Header: period,
        accessor: period.replace(/\s+/g, '_'),
      })),
    ],
    [periods],
  );

  // Transform datas to match the structure required for useTable
  const data: TableData[] = useMemo(
    () =>
      names.map((name, rowIndex) => ({
        metric: name,
        ...periods.reduce(
          (acc, period, colIndex) => {
            const periodKey = period.replace(/\s+/g, '_');
            acc[periodKey] = datas[rowIndex][colIndex];
            return acc;
          },
          {} as Record<string, number>,
        ),
      })),
    [names, datas, periods],
  );

  return <TableSheet columns={columns} data={data} />;
};

export default QuarterlyFiguresTable;
