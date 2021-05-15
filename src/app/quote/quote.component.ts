import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  //quotes: Quotes[] = [
  //   { quote: "“to learn and not to do is really not to learn. To know and not to do is really not to know.”", author: "Bill Gates",submittedBy:"Joy K",upvote: 20, downvote: 50 },
  //   { quote: "“The Bible will always be full of things you cannot understand, as long as you will not live according to those you can understand.”", author: "Mora Savier", submittedBy:"Kirui Mart",upvote: 200, downvote: 44},
  //   { quote: "“knowledge without application is like a book that is never read' Christopher Crawford, Hemel Hempstead.”", author: "Christopher Crawford",submittedBy:"Cindy Kip", upvote: 60, downvote: 44 },
  //   { quote: "“The Bible will always be full of things you cannot understand, as long as you will not live according to those you can understand.”", author: "Billy Sunday",submittedBy:"Ann Mariee", upvote: 602, downvote: 44 }
  // ]
  quotes: Quotes[] = [
    new Quotes("“to learn and not to do is really not to learn. To know and not to do is really not to know.”", "Bill Gates", "Joy K", 20, 50),
    new Quotes("“The Bible will always be full of things you cannot understand, as long as you will not live according to those you can understand.”", "Mora Savier", "Kirui Mart", 200, 44),
    new Quotes("“knowledge without application is like a book that is never read' Christopher Crawford, Hemel Hempstead.”", "Christopher Crawford", "Cindy Kip", 60, 44),
    new Quotes("“The Bible will always be full of things you cannot understand, as long as you will not live according to those you can understand.”", "Billy Sunday", "Ann Mariee", 602, 44)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
