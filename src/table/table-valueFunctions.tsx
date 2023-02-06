import React from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import { FormatDate, FormatNum, ITableColStructure, LinkType } from '../types';

// to be redesigned after implementation of sub-row
function fnExpand() {
  return '>';
}

// *******************************************************************************
// LINK handing has to be generic - for now it is fixed to open a new PAGE
// We could also have link for 'INFO' and 'EDIT popup' etc.
// We have table_id also so we can have different LINK based actions
// *******************************************************************************

// send colLink as 3rd parameter
function fnNameValueLink(
  dataObj: ITableColStructure | any,
  argList: string[],
  colLink: string[],
  uniqueData: [(identifier: string, value: any) => void, any, any],
) {
  // the first argument is a text to display & no value then no link
  if (!(argList[0] in dataObj)) {
    return <p />;
  }
  // get value from table structure col_link: ['page', 'orderId', 'orderId-breadCOrderCampaigns'],
  const breadcrumbsIdentifier: string = colLink[2];
  const name: string = dataObj[argList[0]];
  const link: string = dataObj[colLink[1]] || '';
  const type: string = colLink[0] || LinkType.Page;
  const path = encodeURIComponent(link);
  // const updateDataContext = uniqueData[0];
  // const navigateTo = uniqueData[1];
  const fn = uniqueData[2];

  // check the value
  switch (type) {
    case LinkType.Edit:
      return <p />;
    case LinkType.Info:
      return <p />;
    default:
      return (
        <Link
          to={path}
          onClick={async (e) => {
            // prevent link action and send our data to Context + localStorage for getting value when page is reloaded
            e.preventDefault();
            fn(dataObj, path, breadcrumbsIdentifier, uniqueData.slice(0,2));
            // await updateDataContext(`${breadcrumbsIdentifier}`, dataObj);
            // await navigateTo(path);
          }}
        >
          <p>{name}</p>
        </Link>
      );
  }
}

// *******************************************************************************
// Concatenates string values with comma
// arglist: label, data, data, data, ...
// *******************************************************************************
function fnLabelStringValues(dataObj: ITableColStructure | any, argList: string[]) {
  let valuelist: string = '';

  // concatenate multiple values with a seperator ,
  for (let num: number = 1; num <= argList.length - 1; num++) {
    if (dataObj[argList[num]] !== undefined) {
      const val: string = dataObj[argList[num]];

      if (argList[num] === 'govtRoNo' && val === '') {
        valuelist = valuelist.concat('', 'None', ', ');
      } else if (argList[num] === 'days') {
        const replacedValue = val
          .split(', ')
          .map((day) => day.slice(0, 3))
          .join(', ');

        valuelist = valuelist.concat('', replacedValue, ', ');
      } else if (argList[num] === 'shows') {
        const replacedValue = val
          .split(', ')
          .map((shows) => shows.slice(0, 1))
          .join(', ');

        valuelist = valuelist.concat('', replacedValue, ', ');
      } else {
        valuelist = valuelist.concat('', val, ', ');
      }
    }
  }

  // if no data then exit
  if (valuelist.length === 0) {
    return '';
  }

  // trim the last comma
  return `${argList[0]}${valuelist.slice(0, -2)}`;
}

// *******************************************************************************
// Integer = 'i',
// Float = 'f',
// IPercent = 'ip',
// FPercent = 'fp',
// *******************************************************************************
function getFormattedNum(type: string, val: number) {
  // check the value
  switch (type) {
    case FormatNum.IPercent:
      return `${Math.trunc(val)}%`;

    case FormatNum.Float:
      return `${val.toFixed(2)}`;

    case FormatNum.FPercent:
      return `${val.toFixed(2)}%`;

    default: // FormatNum.Integer
      return `${Math.trunc(val)}`;
  }
}

// *******************************************************************************
// Concatenates number values with hypen
// arglist: format, num, num, num, ...
// *******************************************************************************
function fnNumValues(dataObj: ITableColStructure | any, argList: string[]) {
  let valuelist: string = '';
  // get format
  const type: string = argList[0] || FormatNum.Integer;

  // concatenate multiple values with a seperator ,
  for (let num: number = 0; num <= argList.length - 1; num++) {
    if (dataObj[argList[num]] !== undefined) {
      const val: number = dataObj[argList[num]];

      valuelist = valuelist.concat(getFormattedNum(type, val), ' - ');
    }
  }

  // if no data then exit
  if (valuelist.length === 0) {
    return '';
  }

  // trim the last hypen
  return valuelist.slice(0, -3);
}

// *******************************************************************************
// DateMthYear = 'dmy',
// DateMthYear12 = 'dmy12',
// DateMthYear24 = 'dmy24',
// Time12 = 't12',
// Time24 = 't24',
// DayDateMthYear = 'ddmy',
// *******************************************************************************
function getFormattedDate(type: string, date: Date) {
  // check the value
  switch (type) {
    case FormatDate.DateMthYear12: // 08-Dec-22 09:59 AM
      return format(date, 'dd-MMM-yy hh:mm a..aa');

    case FormatDate.DateMthYear24: // 08-Dec-22 22:02
      return format(date, 'dd-MMM-yy HH:mm');

    case FormatDate.Time12: // 09:59 AM
      return format(date, 'hh:mm a..aa');

    case FormatDate.Time24: // 22:02
      return format(date, 'HH:mm');

    case FormatDate.DayDateMthYear: // Thu 08-Dec-22
      return format(date, 'ccc dd-MMM-yy');

    case FormatDate.DateMthTime24: // Thu 08-Dec 14:10
      return format(date, 'dd-MMM HH:mm');

    default: // FormatDate.DateMthYear: // 08-Dec-22
      return format(date, 'dd-MMM-yy');
  }
}

// *******************************************************************************
// Concatenates date/time values with hypen
// arglist: format, date, date, date, ...
// *******************************************************************************
function fnDateValues(dataObj: ITableColStructure | any, argList: string[]) {
  let valuelist: string = '';

  // get format
  const type: string = argList[0] || FormatDate.DateMthYear;

  // concatenate multiple values with a seperator ,
  for (let num: number = 0; num <= argList.length - 1; num++) {
    if (dataObj[argList[num]] !== undefined) {
      const val: Date = parseISO(dataObj[argList[num]]);

      valuelist = valuelist.concat(getFormattedDate(type, val), ' - ');
    }
  }

  // if no data then exit
  if (valuelist.length === 0) {
    return '';
  }

  // trim the last hypen
  return valuelist.slice(0, -3);
}

// *******************************************************************************
// extra function for string + data + own separator
// *******************************************************************************
function fnStringDateValues(dataObj: ITableColStructure | any, argList: string[]) {
  let valuelist: string = '';
  // get format
  const type: string = argList[0] || FormatDate.DateMthYear;
  const separator: string = argList[1] || ' - ';
  const sliceQuantity: number = separator.length;
  const title: string = argList[2];

  valuelist = valuelist.concat(title);
  // concatenate multiple values with a seperator ,
  for (let num: number = 0; num <= argList.length - 1; num++) {
    if (dataObj[argList[num]] !== undefined) {
      const val: Date = parseISO(dataObj[argList[num]]);

      valuelist = valuelist.concat(getFormattedDate(type, val), separator);
    }
  }
  // if no data then exit
  if (valuelist.length === 0) {
    return '';
  }

  // trim the last hypen
  return valuelist.slice(0, -sliceQuantity);
}

// *******************************************************************************
// extra function for returning only string args, check it after the demo
// *******************************************************************************
function fnLabelStringValuesFailuresScreen(dataObj: ITableColStructure | any, argList: string[]) {
  const valuelist: string = `${argList[0]} ${argList[1]}`;

  return valuelist;
}

function fnStringPositionValues(dataObj: ITableColStructure | any, argList: string[]) {
  let valuelist: string = '';
  // get format
  const separator: string = argList[0] || ' - ';
  const sliceQuantity: number = separator.length;
  const title: string = argList[1];

  valuelist = valuelist.concat(title);
  // concatenate multiple values with a seperator ,
  for (let num: number = 0; num <= argList.length - 1; num++) {
    if (dataObj[argList[num]] !== undefined) {
      const position: string = dataObj[argList[num]];

      valuelist = valuelist.concat(position, separator);
    }
  }
  // if no data then exit
  if (valuelist.length === title.length) {
    return '';
  }

  // trim the last hypen
  return valuelist.slice(0, -sliceQuantity);
}

// ****************************************************************************** //
// Case1: No value (null) in col_value | col_subValue
//        In this case a blank value is returned
//
// Case2: 1 value is passed in col_value | col_subValue
//        In this case returns the element from the data table
//
// Case3: 2 or more values in col_value | col_subValue
//        In this case 1st value is function and remaining args to that function
//        The function is executed, and it returns a value
// ****************************************************************************** //
const getValueFunction = function (
  colValue: string[] | null,
  dataObj: ITableColStructure[] | any,
  colLink: string[] | null,
  // breadCrumbsHook: (identifier: string, value: any) => void | null,
  // navigationHook: any,
  uniqueData: any | null,
) {
  // Case1: blank or null
  if (colValue == null) {
    return '';
  }

  // error handling ...
  if (!Array.isArray(colValue)) {
    return '';
  }

  // Case2: 1 value is passed
  // if value does not exit null returned so padded
  if (colValue.length === 1) {
    // const key: keyof ITableColStructure = colValue[0];
    // return colValue[0] in dataObj ? `${dataObj[key]}` : '';
    return colValue[0] in dataObj ? `${dataObj[colValue[0]]}` : '';
  }

  // Case3: 2 or more values is passed
  if (Array.isArray(colValue)) {
    // first argument is the function name
    const functionName: string = colValue[0];
    // remaining arguments are the parameters to be passed
    const argList: string[] = colValue.slice(1);

    switch (functionName) {
      case 'fnLabelStringValuesFailuresScreen':
        return fnLabelStringValuesFailuresScreen(dataObj, argList);

      case 'fnLabelStringValues':
        return fnLabelStringValues(dataObj, argList);

      case 'fnStringDateValues':
        return fnStringDateValues(dataObj, argList);

      case 'fnDateValues':
        return fnDateValues(dataObj, argList);

      case 'fnNumValues':
        return fnNumValues(dataObj, argList);

      case 'fnNameValueLink':
        return fnNameValueLink(dataObj, argList, colLink!, uniqueData);
      // return fnNameValueLink(dataObj, argList, colLink!);
      case 'fnStringPositionValues':
        return fnStringPositionValues(dataObj, argList);
      case 'fnExpand':
        return fnExpand();

      default:
        return '';
    }
  }

  return '';
};

export default getValueFunction;
