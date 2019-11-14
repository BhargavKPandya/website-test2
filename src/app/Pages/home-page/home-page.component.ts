import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

import { CarouselServiceService } from '../../ServiceFiles/carousel-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('divHoverAnimation', [
      transition('* => *', [
        query('div',style({ transform: 'scale(1.1)'})),
        query('div',
          stagger('600ms', [
            animate('900ms', style({ transform: 'scale(1.2)'}))
        ]))
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {
  imgHoverTest1: boolean;
  hoverEffectElm: boolean;
  mousePosition: boolean;
  
  @HostListener('mouseenter')
  
  onMouseEnter(event: MouseEvent) {
    console.log("OMG It's a Mouse on Image!!!");
    const mousePositionin = event.type === 'mouseenter' ? 'in' : 'out';
    console.log("Mouse positionin..." + mousePositionin);
    //this.mousePosition = true;
    //if (mousePositionin === 'in'){
      this.imgHoverTest1 = true;
      this.hoverEffectElm = true;
   // }
    //const host = event.target as HTMLElement;
   // console.log("host value" + host.style.animation);
    
  }

  @HostListener('mouseleave')
  onMouseLeave(event: MouseEvent) {
    console.log("OMG It's a Mouse outside Image!!!");
    const mousePositionout = event.type === 'mouseleave' ? 'out' : 'in';
    console.log("Mouse positionout..." + mousePositionout);
    //this.mousePosition = false;
   // if (mousePositionout === 'out'){
      this.imgHoverTest1 = false;
      this.hoverEffectElm = false;
   // }
    //const host = event.target as HTMLElement;
    //console.log("host value" + host);
  }

 
 
  hasCarouselImage = false;
  carouselItem;
  carouselError;
  

  constructor(private carouselService: CarouselServiceService) { }

  ngOnInit() {
    this.carouselService.getCarousel()
      .subscribe(data => {this.carouselItem = data, this.hasCarouselImage = true},
        error => this.carouselError = error);
  }

}
