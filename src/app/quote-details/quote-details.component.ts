import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote!: Quotes;
  
  //vote counter
  countUp: number = 0;
  countDown: number = 0;

  upCount(): void {
    this.countUp++
  }
  downCount(): void {
    this.countDown++
  }
  constructor() { }

  ngOnInit(): void {
  }

}
