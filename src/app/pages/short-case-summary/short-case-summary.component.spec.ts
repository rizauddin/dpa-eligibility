import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCaseSummaryComponent } from './short-case-summary.component';

describe('ShortCaseSummaryComponent', () => {
  let component: ShortCaseSummaryComponent;
  let fixture: ComponentFixture<ShortCaseSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortCaseSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortCaseSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
