import { Component } from '@angular/core';
import { rejects } from 'assert';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  public lore: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  //i18n Select
  public name: string = 'Tamara'
  public gender: 'male'| 'female' = 'female'
  public invitatioMap = {male: 'invitarlo', female: 'invitarla'}
  changeClient():void {
    this.name='Damián';
    this.gender= 'male'
  }

  //i18Plural
  public clients: string[]= ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Damian', 'Eduardo', 'Melisa', 'Natalia', 'Laura', 'Esteban']
  public clientsMap= {
    '=0':'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  deleteClient():void {
    this.clients.shift()
  }

  //keyValue pipe
  public person ={
    name: 'Tamara',
    age: 31,
    address: 'Madrid, España'
  }

  //Async pipe con Observable
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap(value => console.log('tap: ', value)),
    )

  //Async pipe con una promesa:
  public promiseValue: Promise<string> = new Promise((resolve, reject) =>{
    setTimeout(()=> {
      resolve('Hay data en la promesa');
      console.log('data de la promesa');
    }, 3500);
  })


}
