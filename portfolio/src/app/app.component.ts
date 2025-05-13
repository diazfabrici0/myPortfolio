import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule, CuerpoComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    const video: HTMLVideoElement | null = document.getElementById('video') as HTMLVideoElement;
    if (video) {
      video.play().catch((err) => {
        console.warn('Autoplay error:', err);
      });
    }
  }
}
