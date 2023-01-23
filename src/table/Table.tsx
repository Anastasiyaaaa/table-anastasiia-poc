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
  breadCrumbsHook: (identifier: string, value: any) => void | null;
  navigationHook: any;
  className: string | undefined;
  valueFunction: ( colValue: string[] | null,
                   dataObj: ITotalData | IOrder | ISchedule | IScreen | IShow,
                   colLink: string[] | null,
                   breadCrumbsHook: (identifier: string, value: any) => void | null,
                   navigationHook: any) => void;
  text: string;
}

const TableRT: React.FC<IExpandableTable> = ({ text, className, subRowStructure, tableData, tableColumnStructure, valueFunction, breadCrumbsHook,  navigationHook}) => {
  console.log(text)
  console.log(tableData)
  return (
    <div className='table-wrapper'>
      <table className={className !== undefined ? `${className} table` : 'table'}>
        <TableHeader tableColumnStructure={tableColumnStructure} />
        <TableBody breadCrumbsHook={breadCrumbsHook} navigationHook={navigationHook} valueFunction={valueFunction} subRowStructure={subRowStructure} tableColumnStructure={tableColumnStructure} tableData={tableData} />
      </table>
    </div>
  );
}

export default TableRT;
