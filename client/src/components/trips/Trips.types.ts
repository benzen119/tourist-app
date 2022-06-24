export type TripType = {
  id?: string;
  imageUrl: string;
  name: string;
  countriesCount: number;
  durationInDays: number;
  rate: number;
  fromPrice: number;
  price: number;
};

export type TripsProps = {
  isLoading: boolean;
  trips: TripType[];
}
