import React from 'react';

import { ITotalData } from '../../types/typesApp/totalData';

import TableRow from './TableRow';

import {IOrder, ISchedule, IScreen, IShow} from '../../types/typesApp/campaigns';
import { ITableColStructure, ITableSubValueStructure } from './../../types';
import getValueFunction from "../table-valueFunctions";


interface IExpandableTable {
  subRowStructure: ITableSubValueStructure[] | undefined;
  tableColumnStructure: ITableColStructure[];
  tableData?: any[];
  // valueFunction: ( colValue: string[] | null,
  //                  dataObj: ITotalData | IOrder | ISchedule | IScreen | IShow,
  //                  colLink: string[] | null,
  //                  uniqueData: any[]) => void;
  uniqueData: any[];
}

const TableBody: React.FC<IExpandableTable> = ({ uniqueData, subRowStructure, tableColumnStructure, tableData }) => {
  let subRowsDataList: (string | any)[][][] | undefined;
  // rowsDataList is an array of totalCellValue so [][][]
  // const a = tableData?.filter((el, i) => i < 2);

  const rowsDataList = tableData?.map(
    (tableDataItem: ITotalData | IOrder | ISchedule | IScreen | IShow) => {
      const totalCellValue: (string | JSX.Element)[][] = [];

      tableColumnStructure.forEach((columnStructure) => {
        const dataColValue: string[] | null = columnStructure.col_value;
        const dataColSubValue: string[] | null = columnStructure.col_subValue;
        const dataColLink: string[] | null = columnStructure.col_link;

        if (columnStructure.col_visible) {
          totalCellValue.push([
            getValueFunction(dataColValue, tableDataItem, dataColLink, uniqueData)!,
            getValueFunction(dataColSubValue, tableDataItem, dataColLink, uniqueData)!,
          ]);
        }
      });

      return totalCellValue;
    },
  );

  // checking if subrow should be for current colum
  if (subRowStructure !== undefined) {
    // get total quantity of lines which will later help us split each substring
    let subRowQuantity: number = 1;

    subRowStructure?.forEach((el) => {
      if (el.row_num !== subRowQuantity) {
        ++subRowQuantity;
      }
    });

    subRowsDataList = tableData?.map(
      (tableDataItem: ITotalData | IOrder | ISchedule | IScreen | IShow) => {
        const totalSubRowValue: (string | JSX.Element)[][][] = [];
        // totalSubRowValue - array which include innerArrays with subRow Values,
        // we will have as many innerArrays as we have subRows

        for (let i = 1; i <= subRowQuantity; i++) {
          const subRowLine: (string | JSX.Element)[][] = [];
          // subRowLine - arr with values per line

          // filter subRow structure to find objS that should be in current line and get value
          subRowStructure
            ?.filter((item) => item.row_num === i)
            ?.forEach((subRowStructureObj) => {
              const dataColValue: string[] | null = subRowStructureObj.row_value;
              const dataColLink: string[] | null = subRowStructureObj.row_link;

              subRowLine.push([
                subRowStructureObj.row_flex,
                getValueFunction(dataColValue, tableDataItem, dataColLink, uniqueData)!,
              ]);
            });
          // push line array with value to all line's array
          totalSubRowValue.push(subRowLine);
        }

        return totalSubRowValue;
      },
    );
  }
  // should use any for 'object' value that returned from fnLinkOrderIDValue function
  // and others other way TColumns don't read value
  const rows = rowsDataList?.map((row: (string | JSX.Element)[][], i: number) => (
    // for future should be upd handle error
    <TableRow index={i} key={i} row={row} subRow={subRowsDataList ? subRowsDataList[i] : undefined} />
  ));

  return <tbody>{tableData?.length === 0 ? <h1>Error</h1> : rows}</tbody>;
};

export default TableBody;
