import { Injectable } from '@angular/core';
import { Genre } from './genre';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
  
};
@Injectable()
export class GenreService {

  private genresUrl = "http://green-web-bookshop.herokuapp.com/api/genres";
  constructor(
    private http: HttpClient,
  ) { }
  getGenres (): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genresUrl);
      
  }
  addGenre(genre: Genre):Observable<Genre> {
  
    return this.http.post<Genre>(this.genresUrl, "name="+genre.name, httpOptions);
  }
  // deleteGenre(genre: Genre):Observable<Genre> {
  
  //   return this.http.delete<Genre>(this.genresUrl, httpOptions);
  // }
  deleteGenre (genre: Genre): Observable<Genre> {
    const id = typeof genre === 'string' ? genre : genre._id;
    const url = `${this.genresUrl}/${genre._id}`;
  
    return this.http.delete<Genre>(url, httpOptions);
  }
}