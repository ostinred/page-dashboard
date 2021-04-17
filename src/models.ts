export interface IDayRange {
  start: number;
  diff: number;
  end: number;
}

export interface ITableRow {
  id: number;
  symbol: string;
  price: string;
  change: string;
  changePercentage: string;
  alerts: boolean;
  volume: string;
  averageVolume: string;
  prevClose: string;
  dayRange: IDayRange;
  open: string;
  high: string;
  low: string;
  quantRating: string;
  authorRating: string;
  sellSideRating: string;
}
