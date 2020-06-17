import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return `${value} ☀`;
  }

}
