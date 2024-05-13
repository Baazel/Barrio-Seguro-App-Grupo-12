import { TestBed } from '@angular/core/testing';

import { EjemploApiService } from './ejemplo-api.service';

describe('EjemploApiService', () => {
  let service: EjemploApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjemploApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
