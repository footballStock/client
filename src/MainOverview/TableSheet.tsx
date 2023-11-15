import React from 'react';
import {useTable} from 'react-table';

const TableSheet: React.FC<{
  columns: any;
  data: any;
}> = ({columns, data}): JSX.Element => {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable({columns, data});

  return (
    <table {...getTableProps()} className="min-w-full leading-normal">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="text-left">
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                className="px-5 py-3 text-sm font-semibold tracking-wider text-left bg-gray-100 border-b-2 text-gray-950">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="text-gray-950">
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="border-b border-gray-200">
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} className="px-5 py-3 text-sm">
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableSheet;
