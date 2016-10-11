import { Component, OnInit } from '@angular/core';
import { ConsViewHeaderComponent, ClientListComponent, ClientDetailComponent, Client,  ClientNotesService } from '../consview';
// ClientService,

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
