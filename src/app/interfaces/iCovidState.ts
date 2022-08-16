export interface ICovidState {
  date: string;
  country: string;
  state: string;
  city: string;
  newDeaths: number;
  deaths: number;
  recovered: number;
  suspects: number;
  tests: number;
  vaccinated: number;
  cases: number;
}
