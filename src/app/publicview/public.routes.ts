import { Routes } from '@angular/router';
// import { Observable } from 'rxjs/Rx';

import { HomeComponent, AboutComponent, ProjectsComponent, ContactComponent } from '../publicview';


export const PublicRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'contact', component: ContactComponent},


]
