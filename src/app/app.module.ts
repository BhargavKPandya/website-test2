import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule, WavesModule, ButtonsModule, IconsModule, CardsFreeModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './Shared/shared.module';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { HereMapComponent } from './Pages/here-map/here-map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent,
    ContactPageComponent,
    HereMapComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CarouselModule, 
    WavesModule, 
    ButtonsModule, 
    IconsModule,
    CardsFreeModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      //https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    }),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
