import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'product',
    component: ProductPageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
