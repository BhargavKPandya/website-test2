import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HereMapComponent } from '../here-map/here-map.component';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit{

  @ViewChild("map")
  public mapElement: HereMapComponent;
  
  public ngOnInit() { }

  public ngAfterViewInit() {
    this.mapElement.dropMarker("Tea");
}
  
}
