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
  vaccinated_total: number;
  vaccinated_primary: number;
  vaccinated_second: number;
  vaccinated_third: number;
  vaccinated_single: number;
  cases: number;
}
