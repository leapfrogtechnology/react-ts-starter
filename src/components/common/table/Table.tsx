import React, { useMemo } from 'react';
import { useTable, useFlexLayout, TableHeaderProps } from 'react-table';

interface IProps {
  columns: any[];
  data: any[];
  onRowClick: Function;
}

const Table = ({ columns, data, onRowClick }: IProps) => {
  const getStyles = (props: Partial<TableHeaderProps>, align = 'left') => [
    props,
    {
      style: {
        justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
        alignItems: 'flex-start',
        display: 'flex',
      },
    },
  ];

  const headerProps = (props: Partial<TableHeaderProps>, { column }: any) => getStyles(props, column.align);

  const cellProps = (props: Partial<TableHeaderProps>, { cell }: any) => getStyles(props, cell.column.align);

  const defaultColumn = useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 200, // maxWidth is only used as a limit for resizing
    }),
    []
  );

  const memoizedColumns = useMemo(() => columns, [columns]);

  const memoizedData = useMemo(() => data, [data]);

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns: memoizedColumns,
      data: memoizedData,
      defaultColumn,
    },
    useFlexLayout
  );

  return (
    <div className="card card--elevated card--scrollable">
      <div {...getTableProps()} className="lf-table">
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className="lf-table__head-row">
            {headerGroup.headers.map(column => (
              <div {...column.getHeaderProps(headerProps)} className="lf-table__col lf-table__col--head">
                {column.render('Header')}
              </div>
            ))}
          </div>
        ))}
        <div className="lf-table__body">
          {rows.map(row => {
            prepareRow(row);
            return (
              <div
                {...row.getRowProps()}
                className="lf-table__row"
                onClick={() => {
                  onRowClick((row.original as any).id);
                }}
              >
                {row.cells.map(cell => {
                  return (
                    <div {...cell.getCellProps(cellProps)} className="lf-table__col">
                      {cell.render('Cell')}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Table;
