import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faUser, faCode, faFolderOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: true
})
export class SidebarComponent {
  faHouse = faHouse;
  faUser = faUser;
  faCode = faCode;
  folder = faFolderOpen;
  faEnvelope = faEnvelope;
  faGithub = faGithub; 
  faLinkedin = faLinkedin;
}
