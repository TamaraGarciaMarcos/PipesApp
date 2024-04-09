import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'tamara';
  public nameUp: string = 'TAMARA';
  public nameTitle: string = 'TaMaRa gArCiA';

  public customDate: Date = new Date();

}
