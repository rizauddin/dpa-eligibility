import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenceSupportComponent } from './evidence-support.component';

describe('EvidenceSupportComponent', () => {
  let component: EvidenceSupportComponent;
  let fixture: ComponentFixture<EvidenceSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvidenceSupportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvidenceSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
