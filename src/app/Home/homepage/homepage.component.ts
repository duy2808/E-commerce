import { Component, OnInit } from '@angular/core';
import { CarcarouslideComponent } from "../carcarouslide/carcarouslide.component";
import { CarouslideTwoComponent } from "../carouslide-two/carouslide-two.component";
import { HotSaleProductComponent } from "../hot-sale-product/hot-sale-product.component";
import { ProductSaleComponent } from "../product-sale/product-sale.component";
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
