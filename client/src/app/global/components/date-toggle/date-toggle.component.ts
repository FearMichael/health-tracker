import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import * as dayjs from 'dayjs';
import { IDateToggle } from './date-toggle.interfaces';

export enum DateToggleTimeframes {
  day = 'DAY',
  week = 'week',
  month = 'MONTH',
  year = 'YEAR'
}

@Component({
  selector: 'app-date-toggle',
  templateUrl: './date-toggle.component.html',
  styleUrls: ['./date-toggle.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateToggleComponent),
    multi: true
  }]
})
export class DateToggleComponent implements OnInit, ControlValueAccessor {

  @Input() public rangeToggle = true;
  @Input() public value: IDateToggle;
  public dayChange = 7;
  public dateToggleTimeframes = DateToggleTimeframes;
  public selectedTimeframe = DateToggleTimeframes.week;


  public defaultDates: IDateToggle = {
    endDate: dayjs().valueOf(),
    startDate: dayjs().add(this.dayChange, 'days').valueOf()
  };

  constructor() { }

  public ngOnInit(): void {
  }

  public writeValue(obj: IDateToggle): void {
    if (obj) this.value = obj;
    else this.value = this.defaultDates;
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

  public timeframeChange(event: MatButtonToggleChange) {
    const now = dayjs().valueOf();
    this.selectedTimeframe = event.value;
    switch (event.value) {
      case DateToggleTimeframes.day:
        this.dayChange = 1;
        this.value = {
          startDate: dayjs().startOf('day').valueOf(),
          endDate: dayjs().endOf('day').valueOf()
        };
        break;
      case DateToggleTimeframes.week:
        this.dayChange = 7;
        this.value = {
          startDate: dayjs().startOf('week').valueOf(),
          endDate: dayjs().endOf('week').valueOf()
        };
        break;
      case DateToggleTimeframes.month:
        this.value = {
          startDate: dayjs().startOf('month').valueOf(),
          endDate: dayjs().endOf('month').valueOf()
        };
        break;
      case DateToggleTimeframes.year:
        this.value = {
          startDate: dayjs().startOf('year').valueOf(),
          endDate: dayjs().endOf('year').valueOf()
        };
        break;
    }
    this.propogateChange(this.value);
  }

  public calculateDate(back?: boolean) {
    this.value = this.calculateHelper(this.value.startDate, this.value.endDate, this.dayChange, back);
    this.propogateChange(this.value);
  }

  private propogateChange(date: IDateToggle): void { }

  private propogateTouch(): void { }

  private calculateHelper(start: number, end: number, days: number, back = false,): IDateToggle {
    switch (this.selectedTimeframe) {
      case DateToggleTimeframes.day:
      case DateToggleTimeframes.week:
        return {
          startDate: dayjs(back ? dayjs(start).subtract(days, 'days') : dayjs(start).add(days, 'days')).valueOf(),
          endDate: dayjs(back ? dayjs(end).subtract(days, 'days') : dayjs(end).add(days, 'days')).valueOf()
        };
      case DateToggleTimeframes.month:
        return {
          startDate: dayjs(back ? dayjs(start).startOf('month').subtract(1, 'month') : dayjs(start).startOf('month').add(1, 'month')).valueOf(),
          endDate: dayjs(back ? dayjs(end).endOf('month').subtract(1, 'month') : dayjs(end).endOf('month').add(1, 'month')).valueOf()
        };
      case DateToggleTimeframes.year:
        return {
          startDate: dayjs(back ? dayjs(start).startOf('year').subtract(1, 'year') : dayjs(start).startOf('year').add(1, 'year')).valueOf(),
          endDate: dayjs(back ? dayjs(end).endOf('year').subtract(1, 'year') : dayjs(end).endOf('year').add(1, 'year')).valueOf()
        };
      default:
        return this.defaultDates;
    }
  }




}
