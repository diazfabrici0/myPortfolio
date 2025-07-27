import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule, CuerpoComponent, LayoutComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent implements AfterViewInit {
  faCoffee = faCoffee;
  ngAfterViewInit() {
    const video: HTMLVideoElement | null = document.getElementById('video') as HTMLVideoElement;
    if (video) {
      video.play().catch((err) => {
        console.warn('Autoplay error:', err);
      });
    }
  }
}
