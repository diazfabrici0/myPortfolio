import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
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

  ngOnInit(){
    setInterval(() => this.nextSlide(), 1500)
  }

  currentSlide = 0;

  itemWidth = 330; 

  visibleCount = Math.floor(window.innerWidth / this.itemWidth); 

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.visibleCount = Math.floor(window.innerWidth / this.itemWidth);
  }

nextSlide() {
  if (this.currentSlide < this.images.length - this.visibleCount) {
    this.currentSlide++;
  } else {
    this.currentSlide = 0; // Reinicia al llegar al final
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
