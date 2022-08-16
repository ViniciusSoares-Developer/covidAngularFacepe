import { TestBed } from '@angular/core/testing';

import { CovidCitiesService } from './covid-cities.service';

describe('CovidCitiesService', () => {
  let service: CovidCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
