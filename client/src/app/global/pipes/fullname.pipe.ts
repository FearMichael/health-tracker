import { Pipe, PipeTransform } from '@angular/core';

interface IFullNameInterface {
  firstName: string;
  lastName: string;
}

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform({ firstName, lastName }: IFullNameInterface): unknown {
    if (!firstName || !lastName) return null;
    return `${firstName} ${lastName}`;
  }

}
