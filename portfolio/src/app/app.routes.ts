import { Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';

export const routes: Routes = [
    {path: 'sidebar', component: SidebarComponent },
    {path: 'cuerpo', component: CuerpoComponent}
];
