import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var L: any;

@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.scss']
})
export class HereMapComponent implements OnInit {

  @ViewChild("map")
  public mapElement: ElementRef;
  @Input("appId")
  public appId: string;
  @Input("appCode")
  public appCode: string;
  private map: any;
  public srcTiles: string;
  public height: string;
  public marker1: string;
  public constructor(private http: HttpClient) {
      this.height = window.innerHeight/2 + "px";
  }
  public ngOnInit() {
      this.srcTiles = "https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/reduced.day/{z}/{x}/{y}/512/png8?app_id=" + this.appId + "&app_code=" + this.appCode + "&ppi=320";
      
  }
  
  public ngAfterViewInit() {
      this.map = L.map(this.mapElement.nativeElement, {
          center: [22.323557, 73.200368],
          zoom: 15,
          layers: [L.tileLayer(this.srcTiles)],
          zoomControl: true
      });     
  }

  public dropMarker(address: string) {
    
        let marker = new L.Marker([22.323557,73.200368]);
        marker.bindPopup("Tea Supplier");
        marker.addTo(this.map);
}

}
