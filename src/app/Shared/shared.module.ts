import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule, WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';


import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    NavbarModule,
    WavesModule, 
    ButtonsModule,
    IconsModule,
    SharedRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
