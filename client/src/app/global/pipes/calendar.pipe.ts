import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'calendar'
})
export class CalendarPipe implements PipeTransform {

  transform(value: string | number, format: string = 'MM/DD/YYYY'): unknown {
    if (!dayjs(value).isValid()) return null;
    return dayjs(value).format(format);
  }

}
