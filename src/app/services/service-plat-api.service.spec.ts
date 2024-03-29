import { TestBed } from '@angular/core/testing';

import { ServicePlatAPIService } from './service-plat-api.service';

describe('ServicePlatAPIService', () => {
  let service: ServicePlatAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePlatAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
