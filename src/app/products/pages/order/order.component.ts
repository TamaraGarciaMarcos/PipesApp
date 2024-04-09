import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public heroes: Hero[] = [
    {
      name:'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name:'Black Panther',
      canFly: false,
      color: Color.black
    },
    {
      name:'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name:'DareDevil',
      canFly: false,
      color: Color.red
    },
    {
      name:'Green Lantern',
      canFly: true,
      color: Color.green
    },
    {
      name:'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name:'Thor',
      canFly: true,
      color: Color.blue
    },

  ]

  tooggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }


}
