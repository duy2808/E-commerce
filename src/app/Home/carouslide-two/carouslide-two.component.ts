import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Banner} from '../banner';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-carouslide-two',
  templateUrl: './carouslide-two.component.html',
  styleUrls: ['./carouslide-two.component.css']
})
export class CarouslideTwoComponent implements OnInit {

  banners: Banner[] ;
  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.getBanners();
  }

  getBanners(): void {
    this.bannerService.getBanners()
      .subscribe(banners => this.banners = banners);
  }
}

