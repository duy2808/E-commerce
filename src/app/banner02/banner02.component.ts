import { Component, OnInit } from '@angular/core';
import { BookService } from '../Home/book.service';
import { Book } from '../Home/book';
@Component({
  selector: 'app-banner02',
  templateUrl: './banner02.component.html',
  styleUrls: ['./banner02.component.css']
})
export class Banner02Component implements OnInit {

  books: Book[] ;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books)//.slice(1,3));
    
  }
}

