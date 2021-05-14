import { Quote } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //quotes:number[] =[1,2,3,4,5]
  quotes:Quote[] =[
    // {
    //   "“to learn and not to do is really not to learn. To know and not to do is really not to know.”","Bill Gates",20,4
    // }
  ]
}
