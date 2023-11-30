import React, {useMemo} from 'react';
import {Column} from 'react-table';
import TableSheet from '../MainOverview/TableSheet';

interface Data {
  [key: string]: number;
}

interface DisplayPanelProps {
  datas: number[][];
  names: string[];
}

const DisplayPanel = ({
  datas,
  names,
  periods,
}: {
  datas: number[][];
  names: string[];
  periods: string[];
}) => {
  // Create columns from names
  const columns: Column<Data>[] = useMemo(() => {
    return names.map((name, index) => {
      const accessor = `col${index}`;
      return {
        Header: name,
        accessor,
        Cell: ({row}: {row: any}) => <div>{row.values[accessor]}</div>,
      };
    });
  }, [names]);

  // Transform datas array to array of objects for useTable hook
  const data = useMemo(() => {
    return datas.map(row => {
      return row.reduce((obj, val, index) => {
        const accessor = `col${index}`;
        obj[accessor] = val;
        return obj;
      }, {} as Data);
    });
  }, [datas]);

  return <TableSheet columns={columns} data={data} />;
};

export default DisplayPanel;
