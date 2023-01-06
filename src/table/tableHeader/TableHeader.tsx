import React from 'react';

import TableRowHeader from './TableRowHeader';
import { ITableColStructure } from '../../types';

interface ITable {
  tableColumnStructure: ITableColStructure[];
}

const TableHeader: React.FC<ITable> = ({ tableColumnStructure }) => (
  <thead>
    <TableRowHeader tableColumnStructure={tableColumnStructure} />
  </thead>
);

export default TableHeader;
