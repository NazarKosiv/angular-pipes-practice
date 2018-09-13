import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 1) {
      return value.split('').reverse().join('');
    } else {
      return value;
    }
  }

}
