import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidStatesService {

  private url = 'https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-states.csv';

  constructor(private http: HttpClient) { }

  get getData(): Observable<string> {
    return this.http.get(this.url,{responseType: 'text'});
  }

}
