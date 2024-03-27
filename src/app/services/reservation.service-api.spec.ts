import { TestBed } from '@angular/core/testing';
import { ReservationAPIService } from './reservation.service-api.service';


describe('ReservationService', () => {
  let service: ReservationAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
