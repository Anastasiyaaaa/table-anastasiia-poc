import React from 'react';

import TableRowHeader from 'src/LibRT/table/tableHeader/TableRowHeader';
import { ITableColStructure } from 'src/LibRT/types';

interface ITable {
  tableColumnStructure: ITableColStructure[];
}

const TableHeader: React.FC<ITable> = ({ tableColumnStructure }) => (
  <thead>
    <TableRowHeader tableColumnStructure={tableColumnStructure} />
  </thead>
);

export default TableHeader;
