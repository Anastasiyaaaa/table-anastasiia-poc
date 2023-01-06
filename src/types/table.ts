// reuseable table column structure
export interface ITableColStructure {
  table_id: number;
  table_ver?: number;
  col_name: string;
  col_visible: boolean;
  col_label: string;
  col_type: string;
  col_value: string[] | null;
  col_subValue: string[] | null;
  col_link: string[] | null;
  col_width: number;
  col_minWidth: number;
  col_sort: string | null;
}

export interface ITableSubValueStructure {
  row_num: number;
  row_name: string;
  row_type: string;
  row_flex: string;
  row_value: string[] | null;
  row_link: string[] | null;
}

// reuseable table sub-row structure
export interface ITableRowStructure {
  table_id: number;
  table_ver?: number;
  row_num: number;
  row_name: string;
  row_type: string;
  row_value: string[] | null;
  row_flex: number;
  row_link: string[] | null;
}
