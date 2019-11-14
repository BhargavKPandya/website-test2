import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  clickScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTo || 0;
    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }

  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
}
