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
    new Quotes("“to learn and not to do is really not to learn. To know and not to do is really not to know.”", "Bill Gates", "Joy K", 0, 0, new Date(2019, 2, 14)),
    new Quotes("“The Bible will always be full of things you cannot understand, as long as you will not live according to those you can understand.”", "Mora Savier", "Kirui Mart", 0, 0, new Date(2020, 7, 14)),
    new Quotes("“knowledge without application is like a book that is never read' Christopher Crawford, Hemel Hempstead.”", "Christopher Crawford", "Cindy Kip", 0, 0, new Date(2021, 2, 14)),
    new Quotes("“We are what we pretend to be, so we must be careful about what we pretend to be.”", "Kurt Vonnegut, Mother Night", "Ann Mariee", 0, 0, new Date(2015, 3, 23))
  ];
  addNewQuote(quote: Quotes) {
    this.quotes.push(quote)
  }
  toggleDetails(index: number) {
    this.quotes[index].toggleContent = !this.quotes[index].toggleContent;
  }
  deleteQuote(isDeleted: any, index: any) {
    if (isDeleted) {
      let remove = confirm(`Are you sure you want to delete this quote?`)
      if (remove) {
        this.quotes.splice(index, 1)
      }
    }
  }
  upCount(upvote: Quotes) {
    this.quotes.push(upvote)
  }
  downCount(downvote: Quotes) {
    this.quotes.push(downvote)
  }

  getMax(){
   return Math.max(...this.quotes.map(quote => quote.upvote))
  }
  constructor() { }

  ngOnInit(): void {
  }
}
