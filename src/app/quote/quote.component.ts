<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
=======
import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';
>>>>>>> ff82ff582d32e6594beafc5dbb1522aaa9724588
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
<<<<<<< HEAD
export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1,"There is always light.If only we're brave enough to see it. If only we're brave enough to be it.","Amanda Gorman",new Date(2019,3,19),"Daisy",45,3),
    new Quotes(2,"I have learned not to allow rejection to move me.","Cicely Tyson",new Date (2019,3,19),"Mark",51,10),
    new Quotes(3, "Don't sit down and wait for the opportunities to come.Get up and make them.","Madam C.J. Walker",new Date (2019,3,19),"Akinyi",23,5),
    new Quotes(4,"All dreams are within reach. All you have to do is keep moving towards them.","Viola Davis",new Date (2019,3,19),"John",44,6),
    new Quotes(5,"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.","William James",new Date (2019,3,19),"Eileen",78,1)
  ];

toggleDetails(index){

  this.quotes[index].showDescription=!this.quotes[index].showDescription;
}
completeQuote(done,index){
if(done){this.quotes.splice(index,1);}
};

addNewQuote(quote){
let quoteLength = this.quotes.length;
quote.id=quoteLength+1;
quote.passedDate= new Date(quote.date)
this.quotes.push(quote)

}
=======

export class QuoteComponent implements OnInit {



  quotes: Quote[] = [
    new Quote(1, new Date(2016,3,14), "There is always light.If only we're brave enough to see it. If only we're brave enough to be it.", 'Amanda Gorman', 2, 1, 'Ivy'),
    new Quote(2, new Date(2017,5,24), "I have learned not to allow rejection to move me.", 'Cicely Tyson', 2, 1, 'Ivy'),
    new Quote(3, new Date(2017,8,29),"Don't sit down and wait for the opportunities to come.Get up and make them.", 'Madam C.J. Walker', 2, 1, 'Ivy'),
    new Quote(4,new Date(2019,6,24), "All dreams are within reach. All you have to do is keep moving towards them.", 'Viola Davis', 2, 1, 'Ivy'),
    new Quote(5, new Date(2013,5,18),"Act as if what you do makes a difference. It does.", 'William James', 2, 1, 'Ivy'),
    new Quote(6,new Date(2012,5,17), "Never bend your head. Always hold it high. Look the world straight in the eye.", 'Hellen Keller', 2, 1, 'Ivy'),
    new Quote(7,new Date(2020,1,14), "When you have a dream, you've got to grab it and never let go.", 'Carol Burnett', 2, 1, 'Ivy'),
    new Quote(8,new Date(2021,7,16), 'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.', 'William James', 2, 1, 'Ivy'),




  ];

  addNewQuote(quote) {
    let quotesLength = this.quotes.length + 1;

    let quoteObj = new Quote(quotesLength, new Date, quote.quote, quote.author, 0, 0,quote.userName,);

    this.quotes.push(quoteObj);
  }

  deleteQuote(isDeleted, index) {

    if (isDeleted) {
      let remove = confirm(`Are you sure you want to delete this ${this.quotes[index].quote}?`)
      if (remove) {
        this.quotes.splice(index, 1)
      }
    }

  }

  upvoteFunc(index) {
    var up = this.quotes[index].upvote + 1;
    this.quotes[index].upvote = up;

  }
  downvoteFunc(index) {
    var down = this.quotes[index].upvote + 1;
    this.quotes[index].upvote = down;

  }
>>>>>>> ff82ff582d32e6594beafc5dbb1522aaa9724588

  constructor() { }

  ngOnInit(): void {
  }

}
