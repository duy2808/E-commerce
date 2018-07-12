import { Component, OnInit } from '@angular/core';
import { BookService } from '../Home/book.service';
import { Book } from '../Home/book';

@Component({
  selector: 'app-owl-carouslide',
  templateUrl: './owl-carouslide.component.html',
  styleUrls: ['./owl-carouslide.component.css']
})
export class OwlCarouslideComponent implements OnInit {

  books: Book[] ;

  showSpinner: boolean = true;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
    //this.bookService.getBooks().subscribe(() => this.showSpinner = false)
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books)//.slice(1,3));
    this.bookService.getBooks().subscribe(() => this.showSpinner = false)
  }

  
}