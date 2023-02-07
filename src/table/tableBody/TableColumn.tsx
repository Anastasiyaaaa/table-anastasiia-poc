import React, { useState } from 'react';

interface IExpandableTable {
  id: number;
  label: string | any;
  subLabel: string | any;
  toggle: () => void;
}

const TableColumn: React.FC<IExpandableTable> = ({ id, label, subLabel, toggle }) => {
  const [open, setOPen] = useState(false);
  console.log(id)

  let columnValue;

  if (subLabel !== '' && subLabel !== undefined) {
    columnValue = (
      <td className='innerColumnRow'>
        <div>{label}</div>
        <div>{subLabel}</div>
      </td>
    );
  } else if (id === 0){
    columnValue = <td onClick={(() => toggle)}> {label} </td>;
  } else{
    columnValue = <td> {label} </td>;
  }

  return columnValue;
};

export default TableColumn;
