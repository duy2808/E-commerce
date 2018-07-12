import { ChangeDetectionStrategy ,Component, OnInit } from '@angular/core';
import { BookService } from '../Home/book.service';
import { Book } from '../Home/book';
import { PaginationInstance } from 'ngx-pagination';



@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  books: Book[] ;
  page: number = 1;
  public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 12,
        currentPage: 1
    };
    public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };

    private popped = [];

    onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }

    pushItem() {
        let item = this.popped.pop() || 'A newly-created meal!';
        this.books.push(item);
    }

    popItem() {
        this.popped.push(this.books.pop());
    }

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
