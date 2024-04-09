import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class canFly implements PipeTransform {

  transform(value: boolean): 'puede volar'| 'no puede volar' {

    return value ? 'puede volar' : 'no puede volar';
  }

}
