import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'calendar'
})
export class CalendarPipe implements PipeTransform {

  transform(value: string, format: string = 'MM/DD/YYYY'): unknown {
    return dayjs(value).format(format);
  }

}
