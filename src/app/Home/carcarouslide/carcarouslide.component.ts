import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Banner} from '../banner';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-carcarouslide',
  templateUrl: './carcarouslide.component.html',
  styleUrls: ['./carcarouslide.component.css']
})
export class CarcarouslideComponent implements OnInit {

  banners: Banner[] ;
  showSpinner: boolean = true;
  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.getBanners();
  }

  getBanners(): void {
    this.bannerService.getBanners()
      .subscribe(banners => this.banners = banners);
      this.bannerService.getBanners().subscribe(() => this.showSpinner = false)
  }
}
