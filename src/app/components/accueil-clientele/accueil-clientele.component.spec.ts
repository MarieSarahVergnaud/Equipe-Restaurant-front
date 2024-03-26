import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilClienteleComponent } from './accueil-clientele.component';

describe('AccueilClienteleComponent', () => {
  let component: AccueilClienteleComponent;
  let fixture: ComponentFixture<AccueilClienteleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilClienteleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilClienteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
