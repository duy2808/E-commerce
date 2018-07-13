import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookComponentComponent}      from './list-book-component/list-book-component.component';
import { AppComponent} from './app.component'
import { HomepageComponent } from './Home/homepage/homepage.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { ProductPageComponent } from "./product-page/product-page.component";
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  
  { 
    path: '', redirectTo: '/Home', pathMatch: 'full',
    
  },
  { 
    path: 'Home', 
    component: HomepageComponent 
  },
  { 
    path: 'detail/:_id', 
    component: ProductDetailComponent
  },
  { 
    path: 'login', 
    component: LoginpageComponent ,
  },
  { 
    path: 'signup', 
    component: RegisterComponent
  },
  { 
    path: 'product-page', 
    component: ProductPageComponent
  },

  /*{ 
    path: '', 
    redirectTo: '/listbook', 
    pathMatch: 'full' 
  },*/
    
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}