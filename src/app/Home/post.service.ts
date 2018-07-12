import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable  } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class PostService {
 
  private postsUrl = "https://jsonplaceholder.typicode.com/posts";
  

  constructor(
    private http: HttpClient,
   ) { }

   /** GET Post from the server */
  getPosts (): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe();
      
  }


}
