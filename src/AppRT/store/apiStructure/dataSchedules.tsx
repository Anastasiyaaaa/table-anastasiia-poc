export const tableSchedulesColumnStructure = [
  {
    table_id: 1,
    col_name: 'expand',
    col_visible: true,
    col_label: '>',
    col_type: 'symbol',
    col_value: ['fnExpand', '0'],
    col_subValue: null,
    col_link: null,
    col_width: 3,
    col_minWidth: 10,
    col_sort: null,
  },
  {
    table_id: 1,
    col_name: 'schedule',
    col_visible: true,
    col_label: 'Schedule Name',
    col_type: 'string',
    // the link is from the scheduled name and linked via schedule ID
    // col_value: ['schedule'],
    col_value: ['fnNameValueLink', 'schedule'],
    col_subValue: null,
    // col_link: null,
    col_link: ['page', 'scheduleId'],
    col_width: 25,
    col_minWidth: 150,
    col_sort: null,
  },
  {
    table_id: 1,
    col_name: 'noOfScreens',
    col_visible: true,
    col_label: 'Screen\nCount',
    col_type: 'string',
    col_value: ['noOfScreens'],
    col_subValue: null,
    col_link: null,
    col_width: 9,
    col_minWidth: 100,
    col_sort: 'a',
  },
  {
    table_id: 1,
    col_name: 'totalTaken',
    col_visible: true,
    col_label: 'Taken\nCount',
    col_type: 'string',
    col_value: ['fnLabelStringValues', 'Taken: ', 'totalTaken'],
    col_subValue: ['fnLabelStringValues', 'Not Taken: ', 'totalNotTaken'],
    col_link: null,
    col_width: 9,
    col_minWidth: 100,
    col_sort: 'a',
  },
  {
    table_id: 1,
    col_name: 'totalPlayed',
    col_visible: true,
    col_label: 'Played\nCount',
    col_type: 'string',
    col_value: ['fnLabelStringValues', 'Played: ', 'totalPlayed'],
    col_subValue: ['fnLabelStringValues', 'Not Played: ', 'totalNotPlayed'],
    col_link: null,
    col_width: 9,
    col_minWidth: 100,
    col_sort: 'a',
  },
  {
    table_id: 1,
    col_name: 'spotsMaximum',
    col_visible: true,
    col_label: 'Spots\nMax/Sch.',
    col_type: 'string',
    col_value: ['fnLabelStringValues', 'Max: ', 'spotsMaximum'],
    col_subValue: ['fnLabelStringValues', 'Sch: ', 'spotsScheduled'],
    col_link: null,
    col_width: 9,
    col_minWidth: 100,
    col_sort: 'a',
  },
  {
    table_id: 1,
    col_name: 'spotsPossible',
    col_visible: true,
    col_label: 'Spots\nMov./Play',
    col_type: 'string',
    col_value: ['fnLabelStringValues', 'Movies: ', 'spotsPossible'],
    col_subValue: ['fnLabelStringValues', 'Played: ', 'spotsPlayed'],
    col_link: null,
    col_width: 9,
    col_minWidth: 100,
    col_sort: 'a',
  },
  {
    table_id: 1,
    col_name: 'takenPercent',
    col_visible: true,
    col_label: 'Taken\nPercent',
    col_type: 'string',
    col_value: ['fnNumValues', 'fp', 'takenPercent'],
    col_subValue: null,
    col_link: null,
    col_width: 9,
    col_minWidth: 100,
    col_sort: 'a',
  },
  {
    table_id: 1,
    col_name: 'playedPercent',
    col_visible: true,
    col_label: 'Played\nPercent',
    col_type: 'string',
    col_value: ['fnNumValues', 'fp', 'playedPercent'],
    col_subValue: null,
    col_link: null,
    col_width: 9,
    col_minWidth: 100,
    col_sort: 'a',
  },
  {
    table_id: 1,
    col_name: 'spotsPlayedPercent',
    col_visible: true,
    col_label: 'Spots\nPercent',
    col_type: 'string',
    col_value: ['fnNumValues', 'fp', 'spotsPlayedPercent'],
    col_subValue: null,
    col_link: null,
    col_width: 9,
    col_minWidth: 100,
    col_sort: 'a',
  },
];

export const tableSchedulesSubRowStructure = [
  {
    row_num: 1,
    row_name: 'schedule',
    row_type: 'string',
    row_flex: '3.0',
    row_value: ['fnStringDateValues', 'dmy', ' to ', 'Schedule: ', 'startDate', 'endDate'],
    row_link: null,
  },
  {
    row_num: 1,
    row_name: 'createdOn',
    row_type: 'string',
    row_flex: '2.0',
    row_value: ['fnLabelStringValues', 'Created On: ', 'createdOn'],
    row_link: null,
  },
  {
    row_num: 1,
    row_name: 'shows',
    row_type: 'string',
    row_flex: '1.5',
    row_value: ['fnLabelStringValues', 'Shows: ', 'shows'],
    row_link: null,
  },
  {
    row_num: 1,
    row_name: 'days',
    row_type: 'string',
    row_flex: '1.5',
    row_value: ['fnLabelStringValues', 'Days: ', 'days'],
    row_link: null,
  },
  {
    row_num: 2,
    row_name: 'composition',
    row_type: 'string',
    row_flex: '3',
    row_value: ['fnLabelStringValues', '', 'composition'],
    row_link: null,
  },
  {
    row_num: 2,
    row_name: 'position',
    row_type: 'string',
    row_flex: '2',
    row_value: ['fnLabelStringValues', 'Position: ', 'position'],
    row_link: null,
  },
  {
    row_num: 2,
    row_name: 'prefPosition',
    row_type: 'string',
    row_flex: '3',
    row_value: ['fnLabelStringValues', 'Repetition: ', 'prefPosition'],
    row_link: null,
  },
];