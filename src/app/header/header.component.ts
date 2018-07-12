import { Component, OnInit } from '@angular/core';
import { GenreService } from '../Home/genre.service';
import { Genre } from '../Home/genre';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  genres: Genre[] ;
  showSpinner: boolean = true;
  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres(): void {
    this.genreService.getGenres()
      .subscribe(genres => this.genres = genres);
      this.genreService.getGenres().subscribe(() => this.showSpinner = false)
  }
}
