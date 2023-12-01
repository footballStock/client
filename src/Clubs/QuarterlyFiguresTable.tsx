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
  dates,
}: {
  datas: number[][];
  names: string[];
  dates: string[];
}) => {
  const columns: Column<TableData>[] = useMemo(
    () => [
      {
        Header: '',
        accessor: 'metric', // accessor is the "key" in the data
        //TODO
        Cell: ({value}: {value: any}) => <div className="w-60">{value}</div>,
      },
      ...dates.map((period, index) => ({
        Header: period,
        accessor: period.replace(/\s+/g, '_'),
        //TODO
        Cell: ({value}: {value: any}) => <div className="w-32 ">{value}</div>,
      })),
    ],
    [dates],
  );

  // Transform datas to match the structure required for useTable
  const data: TableData[] = useMemo(
    () =>
      names.map((name, rowIndex) => ({
        metric: name,
        ...dates.reduce(
          (acc, period, colIndex) => {
            const periodKey = period.replace(/\s+/g, '_');
            acc[periodKey] = datas[rowIndex][colIndex];
            return acc;
          },
          {} as Record<string, number>,
        ),
      })),
    [names, datas, dates],
  );

  return <TableSheet columns={columns} data={data} />;
};

export default QuarterlyFiguresTable;
