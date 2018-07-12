
import { Post } from './Home/post';
import { PostService } from './Home/post.service';
import { Component, OnInit } from '@angular/core';
import { BookService } from './Home/book.service';
import { Book } from './Home/book';
import { GenreService } from './Home/genre.service';
import { Genre } from './Home/genre';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  genres: Genre[] ;
  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres(): void {
    this.genreService.getGenres()
      .subscribe(genres => this.genres = genres);
  }
}
