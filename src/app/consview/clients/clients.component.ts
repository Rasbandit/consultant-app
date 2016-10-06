import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../../shared/header/header.component';

import { ClientListComponent } from './client-list/client-list.component';
import { FixedExpensesComponent } from '../fixed-expenses/fixed-expenses.component';

@Component({
  selector: 'app-clients',
  template: '<router-outlet></router-outlet>'
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
