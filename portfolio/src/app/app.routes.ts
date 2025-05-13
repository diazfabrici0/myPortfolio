import { Routes, ExtraOptions } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { Seccion1Component } from './components/seccion1/seccion1.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';


export const routes: Routes = [
    {path: 'sidebar', component: SidebarComponent },
    {path: 'cuerpo', component: CuerpoComponent},
    {path: 'inicio', component: Seccion1Component},
    {path: 'sobre-mi', component: SobreMiComponent},
    {path: 'habilidades', component: SliderComponent},
    {path: 'proyectos', component: ProyectosComponent}
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};