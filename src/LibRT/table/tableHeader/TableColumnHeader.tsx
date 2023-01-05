import React from 'react';

interface IColumnHeader {
  visible: boolean;
  label: string;
  width: number;
  minWidth: number;
}
const TableColumnHeader: React.FC<IColumnHeader> = ({ visible, label, width, minWidth }) => {
  let column = (
    <th className='th_column' style={{ width: `${width}%`, minWidth: `${minWidth}px` }}>
      {label}
    </th>
  );

  if (!visible) {
    column = <> </>;
  }

  return column;
};

export default TableColumnHeader;
