import React from 'react';

import TableColumnHeader from 'src/LibRT/table/tableHeader/TableColumnHeader';
import { ITableColStructure } from 'src/LibRT/types';

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
