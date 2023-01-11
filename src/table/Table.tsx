import React from 'react';

import { ITotalData } from '../typesApp/totalData';

import TableBody from './tableBody/TableBody';
import TableHeader from './tableHeader/TableHeader';

import {IOrder, ISchedule, IScreen, IShow} from '../typesApp/campaigns';
import { ITableColStructure, ITableSubValueStructure } from '../types';

import './Table.css';

interface IExpandableTable {
  subRowStructure: ITableSubValueStructure[] | undefined;
  tableData?:
    | ITotalData[]
    | IOrder[]
    | ISchedule[]
    | IScreen[]
    | IShow[];
  tableColumnStructure: ITableColStructure[];
  className: string | undefined;
  getValueFunction: ( a: string[] | null,
                      b: ITotalData | IOrder | ISchedule | IScreen | IShow,
                      c: string[] | null ) => void;
}

const TableRT: React.FC<IExpandableTable> = ({ className, subRowStructure, tableData, tableColumnStructure, getValueFunction }) => (
  <div className='table-wrapper'>
    <table className={className !== undefined ? `${className} table` : 'table'}>
      <TableHeader tableColumnStructure={tableColumnStructure} />
      <TableBody valueFunction={getValueFunction} subRowStructure={subRowStructure} tableColumnStructure={tableColumnStructure} tableData={tableData} />
    </table>
  </div>
);

export default TableRT;
