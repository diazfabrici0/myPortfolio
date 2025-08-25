import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

  images = [
    'assets/image/angular.png',
    'assets/image/bootstrap.png',
    'assets/image/html.png',
    'assets/image/css.png',
    'assets/image/django.png',
    'assets/image/github.png',
    'assets/image/javascript.png',
    'assets/image/jquery.png',
    'assets/image/laravel.png',
    'assets/image/mysql.png',
    'assets/image/nodejs.png',
    'assets/image/php.png',
    'assets/image/react.png',
    'assets/image/tailwind.png',
    'assets/image/typescript.png',
  ];

  currentSlide = 0;
  itemWidth = 200;         // se recalcula al inicio
  visibleCount = 1;        // cantidad de imágenes visibles a la vez

  ngOnInit() {
    setInterval(() => this.nextSlide(), 1500);
  }

  ngAfterViewInit() {
    this.updateSlider();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateSlider();
  }

  updateSlider() {
    const containerWidth = this.sliderContainer.nativeElement.offsetWidth;

    if (containerWidth < 500) {
      this.itemWidth = containerWidth / 2;    // 2 visibles en mobile
    } else if (containerWidth < 900) {
      this.itemWidth = containerWidth / 3;    // 3 visibles en tablet
    } else {
      this.itemWidth = containerWidth / 4;    // 4 visibles en desktop
    }

    this.visibleCount = Math.floor(containerWidth / this.itemWidth);
  }

  nextSlide() {
    if (this.currentSlide < this.images.length - this.visibleCount) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.images.length - this.visibleCount;
    }
  }
}
