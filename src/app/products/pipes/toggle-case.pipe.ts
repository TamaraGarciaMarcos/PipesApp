
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

  //metodo que se llama para la transformacion de los datos
  transform(value: string, toUpper: boolean = false ): string {

    return (toUpper)
      //si es verdadero:
      ? value.toUpperCase()
      //si es falso:
      : value.toLowerCase()
  }

}
