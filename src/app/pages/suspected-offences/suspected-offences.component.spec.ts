import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectedOffencesComponent } from './suspected-offences.component';

describe('SuspectedOffencesComponent', () => {
  let component: SuspectedOffencesComponent;
  let fixture: ComponentFixture<SuspectedOffencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuspectedOffencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuspectedOffencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
