import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotes[] = [
    { quote: "“to learn and not to do is really not to learn. To know and not to do is really not to know.”", author: "Bill Gates", upvote: 20, downvote: 4 },
    { quote: "“to learn and not to do is really not to learn. To know and not to do is really not to know.”", author: "Bill Gates", upvote: 20, downvote: 4 },
    { quote: "“to learn and not to do is really not to learn. To know and not to do is really not to know.”", author: "Bill Gates", upvote: 20, downvote: 4 }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
