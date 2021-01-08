import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeithTestComponent } from './keith-test.component';

describe('KeithTestComponent', () => {
  let component: KeithTestComponent;
  let fixture: ComponentFixture<KeithTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeithTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeithTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
