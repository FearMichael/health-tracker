import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DateToggleComponent } from './date-toggle.component';

describe('DateToggleComponent', () => {
  let component: DateToggleComponent;
  let fixture: ComponentFixture<DateToggleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DateToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
