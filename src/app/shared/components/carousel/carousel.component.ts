import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  public slides = [
    { src: '../../../../assets/icons/no_image.webp' },
    {
      src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-indigo-design.png',
    },
    {
      src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slider-image-chart.png',
    },
    {
      src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-charts.png',
    },
  ];
}
