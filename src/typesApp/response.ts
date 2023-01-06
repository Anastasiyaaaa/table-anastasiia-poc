import { IOrder } from './campaigns/orders';
import { ISchedule } from './campaigns/schedule';

export interface IOrdersResponse {
  amount: number;
  onPage: number;
  orders: IOrder[];
}

export interface IOrdersSummaryResponse {
  noOfActive: number;
  noOfCompleted: number;
  noOfLogsPending: number;
  noOfPlaned: number;
  noOfProblematic: number;
  noOfUnoptimized: number;
  problematicPercent: number;
}

export type ISchedulesResponse = ISchedule[];
