import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format, formatDistance, formatRelative, subDays, addDays, getTime } from 'date-fns'
import { IDateToggle } from './date-toggle.interfaces';


@Component({
  selector: 'date-toggle',
  templateUrl: './date-toggle.component.html',
  styleUrls: ['./date-toggle.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateToggleComponent),
    multi: true
  }]
})
export class DateToggleComponent implements OnInit, ControlValueAccessor {

  public dayChange: number = 7;

  @Input("value") public value: IDateToggle;
  @Input("range-toggle") public rangeToggle = true;

  public defaultDates: IDateToggle = {
    endDate: Date.now(),
    startDate: this.calculateHelper(true, Date.now(), this.dayChange)
  }

  constructor() { }

  propogateChange(date: IDateToggle): void { }

  propogateTouch(): void { }

  public writeValue(obj: IDateToggle): void {
    if (obj) {
      this.value = obj;
    } else {
      this.value = this.defaultDates;
    }
  }
  public registerOnChange(fn: any): void {
    this.propogateChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.propogateTouch = fn;
  }

  // public setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

  public calculateDate(back?: boolean) {
    this.value = {
      endDate: this.calculateHelper(back, this.value.endDate, this.dayChange),
      startDate: this.calculateHelper(back, this.value.startDate, this.dayChange)
    }
    this.propogateChange(this.value);
  }

  private calculateHelper(back = false, time: number, days: number) {
    return getTime(back ? subDays(time, days) : addDays(time, days));
  }


  ngOnInit(): void {
  }

}
