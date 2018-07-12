import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarcarouslideComponent } from './Home/carcarouslide/carcarouslide.component';
import { HotSaleProductComponent } from './Home/hot-sale-product/hot-sale-product.component';
import { ProductSaleComponent } from './Home/product-sale/product-sale.component';

import { Post } from './Home/post';
import { BookService } from './Home/book.service';
import { Book } from './Home/book';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarouslideTwoComponent } from './Home/carouslide-two/carouslide-two.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GenreService } from './Home/genre.service';
import { Genre } from './Home/genre';
import { Banner} from './Home/banner';
import { BannerService } from './Home/banner.service';
import { OwlCarouslideComponent } from './owl-carouslide/owl-carouslide.component';
import { ListBookComponentComponent } from './list-book-component/list-book-component.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DescriptionComponent } from './product-detail/description/description.component';
import { RegisterComponent } from './register/register.component';
// Import your library
import { OwlModule } from 'ngx-owl-carousel';
import { Owl2Component } from './owl-2/owl-2.component';
import { TabComponent } from './tab/tab.component';
import { Banner02Component } from './banner02/banner02.component';
import { Owl3Component } from './owl-3/owl-3.component';
import { Tab02Component } from './tab-02/tab-02.component';
import { IntroComponent } from './intro/intro.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { ProductPageComponent } from './product-page/product-page.component';
import { LoadingPageModule } from 'angular-loading-page';         //Loading directive
import { MaterialBarModule } from 'angular-loading-page';
import { LoadingSpiComponent } from './ui/loading-spi/loading-spi.component'; 
import {StringFilterPipe} from './string-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarcarouslideComponent,
    HotSaleProductComponent,
    ProductSaleComponent,
    CarouslideTwoComponent,
    FooterComponent,
    HeaderComponent,
    OwlCarouslideComponent,
    ListBookComponentComponent,
    HomepageComponent,
    LoginpageComponent,
    ProductDetailComponent,
    DescriptionComponent,
    RegisterComponent,
    Owl2Component,
    TabComponent,
    Banner02Component,
    Owl3Component,
    Tab02Component,
    IntroComponent,
   
    ProductPageComponent,
   
    LoadingSpiComponent,
    StringFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    FormsModule,
    AppRoutingModule,
    OwlModule,
    NgxPaginationModule
    
  ],
  providers: [BookService,GenreService,BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
