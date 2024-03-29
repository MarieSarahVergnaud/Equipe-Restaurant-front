import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeParTableComponent } from './commande-par-table.component';

describe('CommandeParTableComponent', () => {
  let component: CommandeParTableComponent;
  let fixture: ComponentFixture<CommandeParTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandeParTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommandeParTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
