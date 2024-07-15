import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingCostsComponent } from './undertaking-costs.component';

describe('UndertakingCostsComponent', () => {
  let component: UndertakingCostsComponent;
  let fixture: ComponentFixture<UndertakingCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingCostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UndertakingCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
