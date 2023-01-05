export enum SortOrder {
  Ascend = 'a',
  Descen = 'd',
}

export enum FormatNum {
  Integer = 'i',
  Float = 'f',
  IPercent = 'ip',
  FPercent = 'fp',
}

// UKR 8/DEC : hardcoded DateFormat should be removed from consts.ts
export enum FormatDate {
  DateMthYear = 'dmy',
  DateMthYear12 = 'dmy12',
  DateMthYear24 = 'dmy24',
  Time12 = 't12',
  Time24 = 't24',
  DayDateMthYear = 'ddmy',
  DateMthTime24 = 'dmt24',
}

export enum LinkType {
  Page = 'page',
  Info = 'info',
  Edit = 'edit',
}

export enum ReuseTable {
  // campaign drilldown
  CampaignOrder, // 0
  CampaignSchedule, // 1
  CampaignScreen, // 2
  CampaignShow, // 3

  // show failure drilldown
  FailureScreen, // 4
  FailureSchedule, // 5
}
