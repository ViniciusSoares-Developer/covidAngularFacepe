import { TestBed } from '@angular/core/testing';

import { CovidStatesService } from './covidStates.service';

describe('CovidService', () => {
  let service: CovidStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
