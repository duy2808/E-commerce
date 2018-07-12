import { Component, OnInit } from '@angular/core';
import { BookService } from '../Home/book.service';
import { Book } from '../Home/book';
@Component({
  selector: 'app-owl-3',
  templateUrl: './owl-3.component.html',
  styleUrls: ['./owl-3.component.css']
})
export class Owl3Component implements OnInit {

  books: Book[] ;
  showSpinner: boolean = true;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books)//.slice(1,3));
      this.bookService.getBooks().subscribe(() => this.showSpinner = false)
  }
}