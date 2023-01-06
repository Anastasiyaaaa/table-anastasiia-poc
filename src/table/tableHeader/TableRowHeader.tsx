import React from 'react';

import TableColumnHeader from './TableColumnHeader';
import { ITableColStructure } from '../../types';

interface ITable {
  tableColumnStructure: ITableColStructure[];
}

const TableRowHeader: React.FC<ITable> = ({ tableColumnStructure }) => {
  const columns = tableColumnStructure?.map((item: ITableColStructure) => (
    <TableColumnHeader
      key={item.col_name}
      label={item.col_label}
      minWidth={item.col_minWidth}
      visible={item.col_visible}
      width={item.col_width}
    />
  ));

  return <tr>{columns}</tr>;
};

export default TableRowHeader;
