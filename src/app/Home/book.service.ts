import { Injectable } from '@angular/core';
import { Book } from './book';
import { Genre } from './genre';
import { Images } from './images';
import { Size } from './size';
import { Comments } from './comments';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable  } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookService {
   booksUrl = "http://green-web-bookshop.herokuapp.com/api/books";
  constructor(
    private http: HttpClient,
  ) { }
  getBooks (): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
      
  }
  getBook(id:string): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  

}
