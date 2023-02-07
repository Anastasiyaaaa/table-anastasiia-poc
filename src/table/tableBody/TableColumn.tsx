import React from 'react';

interface IExpandableTable {
  label: string | any;
  subLabel: string | any;
  toggle: () => void;
}

const TableColumn: React.FC<IExpandableTable> = ({ label, subLabel, toggle }) => {
  let columnValue;

  if (subLabel !== '' && subLabel !== undefined) {
    columnValue = (
      <td className='innerColumnRow'>
        <div>{label}</div>
        <div>{subLabel}</div>
      </td>
    );
  } else if (label === '>'){
    columnValue = <td className='expand' onClick={toggle}> {label} </td>;
  } else{
    columnValue = <td> {label} </td>;
  }

  return columnValue;
};

export default TableColumn;
