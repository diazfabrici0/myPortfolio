import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Seccion1Component } from '../seccion1/seccion1.component';
import { SobreMiComponent } from '../sobre-mi/sobre-mi.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ContactoComponent } from '../contacto/contacto.component';


@Component({
  selector: 'app-cuerpo',
  imports: [
    CommonModule, RouterModule,  SliderComponent, ProyectosComponent,
    SidebarComponent, Seccion1Component, SobreMiComponent, ContactoComponent
  ],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {
  constructor(private route: ActivatedRoute){}

  ngAfterViewInit(){
    this.route.fragment.subscribe(fragment => {
      if(fragment !== null) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if(element){
            element.scrollIntoView({behavior:'smooth'});
          }
        }, 100);
      }
    })
  }
}
