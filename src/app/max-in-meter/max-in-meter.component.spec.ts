import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxInMeterComponent } from './max-in-meter.component';

describe('MaxInMeterComponent', () => {
  let component: MaxInMeterComponent;
  let fixture: ComponentFixture<MaxInMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxInMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxInMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
