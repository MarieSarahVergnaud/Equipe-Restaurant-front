import { TestBed } from '@angular/core/testing';

import { ServiceCommandeAPIService } from './service-commande-api.service';

describe('ServiceCommandeAPIService', () => {
  let service: ServiceCommandeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCommandeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
