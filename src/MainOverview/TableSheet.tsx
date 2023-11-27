import React from 'react';
import {useTable} from 'react-table';

const TableSheet: React.FC<{
  columns: any;
  data: any;
}> = ({columns, data}): JSX.Element => {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable({columns, data});

  return (
    <table {...getTableProps()} id="mainoverview-table" >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="text-left">
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                className="table-header">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="table-body" >
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="table-body-button">
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} className="table-body-text">
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
