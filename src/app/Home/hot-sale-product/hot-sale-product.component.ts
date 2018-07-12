import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';


@Component({
  selector: 'app-hot-sale-product',
  templateUrl: './hot-sale-product.component.html',
  styleUrls: ['./hot-sale-product.component.css']
})
export class HotSaleProductComponent implements OnInit {

  books: Book[] ;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books.slice(1,3));
  }
}
