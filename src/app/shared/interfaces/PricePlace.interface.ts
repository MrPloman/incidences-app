export interface PricePlaceInterface {
  firstPrice: {
    date: Date;
    value: number | null;
  };
  currentPrice: {
    date: Date;
    value: number | null;
  };
  averagePrice: number | null;
}
