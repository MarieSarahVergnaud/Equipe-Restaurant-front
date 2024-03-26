import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEnSalleComponent } from './service-en-salle.component';

describe('ServiceEnSalleComponent', () => {
  let component: ServiceEnSalleComponent;
  let fixture: ComponentFixture<ServiceEnSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceEnSalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceEnSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
