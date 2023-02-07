import React, {useState} from 'react';

import TableColumn from './TableColumn';

import '../Table.css';

interface IExpandableTable {
  subRow: (string | any)[][][] | undefined;
  row: (string | any)[][];
  index: number;
}

const TableRow: React.FC<IExpandableTable> = ({ index, row, subRow }) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  const columns = row?.map((item, i: number) => {
    console.log(i)
    return <TableColumn key={i} id={i} label={item[0]} subLabel={item[1]} toggle={toggle}/>
  });

  const subRowValues = (
    <td colSpan={row.length}>
      {/* line by line get the array */}
      {open && subRow?.map((values, i) => (
        <div className='subRow' key={i}>
          {/* get values per line */}
          {values.map((value, iValue) => (
            <div key={iValue} style={{ flex: value[0] }}>
              {value[1]}
            </div>
          ))}
        </div>
      ))}
    </td>
  );

  // in 1st variant I wanted to put row and subrow in 1 <tr> and check event handler inside 1tr
  // and for that structure we need inner table
  // but this variant broke main column structure because of property collapse

  // so 2nd variant: 1st <tr> - line with main column values, 2nd <tr> our subRow
  // handle event we can by id, where index will connect row and subrow
  return (
    <>
      <tr id={`row-${index}`}>{columns}</tr>
      {subRow !== undefined && <tr id={`subRow-${index}`}>{subRowValues}</tr>}
    </>
  );
};

export default TableRow;
