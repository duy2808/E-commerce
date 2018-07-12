import { Component, OnInit } from '@angular/core';
import { GenreService } from '../Home/genre.service';
import { Genre } from '../Home/genre';
@Component({
  selector: 'app-list-book-component',
  templateUrl: './list-book-component.component.html',
  styleUrls: ['./list-book-component.component.css']
})
export class ListBookComponentComponent implements OnInit {

  genres: Genre[];
  name: string;
  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.getGenres();
  }
  getGenres(): void {
    this.genreService.getGenres().subscribe(z => this.genres = z);
  };
  addGenre(): void {
    if (this.name.length > 0) {
      let genre = new Genre(this.name);

      this.genreService.addGenre(genre).subscribe(_ => {
        this.name = "";
        this.genres.push(_);
      });
    }
  }
  deleteGenre(genre: Genre): void {
    this.genres = this.genres.filter(h => h !== genre);
    this.genreService.deleteGenre(genre).subscribe(
      
    );
  }

}

