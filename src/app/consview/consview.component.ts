import { Component, OnInit } from '@angular/core';
import { ClientDetailComponent } from './client-detail';
// ClientService,
import { ConsViewHeaderComponent } from './cons-view-header';
import { ClientNotesService } from './client-notes';
import { ClientListComponent, Client } from './client-list';

@Component({
  selector: 'app-consview',
  templateUrl: 'consview.component.html',
  styles: []
})
export class ConsviewComponent implements OnInit {

  selectedClient: Client;
  constructor() { }

  ngOnInit() {
  }

}
