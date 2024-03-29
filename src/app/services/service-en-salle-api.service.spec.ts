import { TestBed } from '@angular/core/testing';

import { ServiceEnSalleAPIService } from './service-en-salle-api.service';

describe('ServiceEnSalleAPIService', () => {
  let service: ServiceEnSalleAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEnSalleAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
