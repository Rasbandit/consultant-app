import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../shared/header/header.component';

import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientNotesComponent } from './clients/client-notes/client-notes.component';

import { FixedExpensesComponent } from './fixed-expenses/fixed-expenses.component';

@Component({
  selector: 'app-consview',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ConsviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
