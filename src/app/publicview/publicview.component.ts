import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-publicview',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class PublicviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
