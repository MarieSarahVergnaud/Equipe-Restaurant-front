import { TestBed } from '@angular/core/testing';

import { AcceuilClienteleAPIService } from './acceuil-clientele-api.service';

describe('AcceuilClienteleAPIService', () => {
  let service: AcceuilClienteleAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceuilClienteleAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
