import React from 'react';

import TableBody from './tableBody/TableBody';
import TableHeader from './tableHeader/TableHeader';

import { ITableColStructure, ITableSubValueStructure } from '../types';

import './Table.css';

interface IExpandableTable {
  subRowStructure: ITableSubValueStructure[] | undefined;
  tableData?: any[];
  tableColumnStructure: ITableColStructure[];
  className: string | undefined;
  uniqueData: any[]
}

const TableRT: React.FC<IExpandableTable> = ({ uniqueData, className, subRowStructure, tableData, tableColumnStructure}) => (
    <div className='table-wrapper'>
      <table className={className !== undefined ? `${className} table` : 'table'}>
        <TableHeader tableColumnStructure={tableColumnStructure} />
        <TableBody uniqueData={uniqueData} subRowStructure={subRowStructure} tableColumnStructure={tableColumnStructure} tableData={tableData} />
      </table>
    </div>
  );

export default TableRT;
