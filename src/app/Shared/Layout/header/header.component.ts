import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('animatedSticky') menuElement: ElementRef;
  animSticky : boolean = false;
  
  constructor() { }

  ngOnInit() {
    const navbarHeight2 = this.menuElement.nativeElement.clientHeight;
    console.log("Navbar Height is :" + navbarHeight2);
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    
    if(windowScroll >= 150) {
      this.animSticky = true;
    } 
    else {
      this.animSticky = false;
    }
  }

}
