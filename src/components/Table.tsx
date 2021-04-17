import React, { useState } from 'react';
import { ITableRow } from '../models';
import TableRow from './TableRow';

interface ITable<T> {
  titles: { [name: string]: string };
  titlesCopy: string[];
  data: { [id: string]: T };
  onChange: (data: { [id: string]: T }) => void;
}

const Table = <T extends ITableRow>({
  titles,
  titlesCopy,
  data,
  onChange,
}: ITable<T>) => {
  const [sortBy, setSortBy] = useState<keyof T>('id');

  const [sortDirection, setSortDirection] = useState(1);

  const handleSort = (column: keyof T) => () => {
    setSortDirection(
      sortBy === column ? (prevDirection: number) => prevDirection * -1 : 1
    );
    setSortBy(column);
  };

  const sortedData = Object.keys(data).sort((prev: string, next: string) => {
    const prevItem = data[prev];
    const nextItem = data[next];

    if (prevItem[sortBy] === nextItem[sortBy]) {
      return 0;
    }
    return prevItem[sortBy] > nextItem[sortBy]
      ? sortDirection
      : -1 * sortDirection;
  });

  return (
    <div className="is-content-wrapper">
      <table className="is-table">
        <thead>
          <tr>
            {titlesCopy.map((title: string, index: number) => (
              <th key={index} className={`${titles[title]}-cell`}>
                <button onClick={handleSort(titles[title] as keyof T)}>
                  {title}
                  {titles[title] === sortBy
                    ? sortDirection > 0
                      ? '↑'
                      : '↓'
                    : null}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((key: string) => (
            <TableRow
              key={key}
              data={data[key]}
              onChange={(item: ITableRow) =>
                onChange({ ...data, [item.id]: item })
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
