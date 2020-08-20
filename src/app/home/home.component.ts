import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  images = [
    '/assets/images/carousel/slide-1.jpg',
    '/assets/images/carousel/slide-2.jpg'
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.pauseOnHover = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
  }

}
