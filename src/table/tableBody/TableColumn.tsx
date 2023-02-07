import React, { useState } from 'react';

interface IExpandableTable {
  key: number;
  label: string | any;
  subLabel: string | any;
  toggle: () => void;
}

const TableColumn: React.FC<IExpandableTable> = ({ key, label, subLabel, toggle }) => {
  const [open, setOPen] = useState(false);

  let columnValue;

  if (subLabel !== '' && subLabel !== undefined) {
    columnValue = (
      <td className='innerColumnRow'>
        <div>{label}</div>
        <div>{subLabel}</div>
      </td>
    );
  } else if (key === 0){
    columnValue = <td onClick={(() => toggle)}> {label} </td>;
  } else{
    columnValue = <td> {label} </td>;
  }

  return columnValue;
};

export default TableColumn;
