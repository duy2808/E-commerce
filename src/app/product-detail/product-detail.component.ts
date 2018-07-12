import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Book } from '.././Home/book';
import { BookService } from '.././Home/book.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  book : Book;
  showSpinner: boolean = true;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getBook();
    
  }

  getBook():void {
    let id: string;
    id = this.route.snapshot.paramMap.get('_id');
    this.bookService.getBook(id)
      .subscribe( book => this.book =book );
  this.bookService.getBook(id)
      .subscribe(() => this.showSpinner = false)
  }

}

