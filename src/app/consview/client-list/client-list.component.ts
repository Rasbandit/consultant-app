import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ClientService } from '../client.service';
import { Client } from '../client-list/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    // this.clients = this.clientService.getClients();
    this.onFetch();
    this.onStore();
    this.clientService.clientsChanged.subscribe(
      (clients: Client[]) => this.clients = clients
    );


  }
  onStore() {
    this.clientService.storeData()
  }
  onFetch() {
    this.clientService.fetchData();
  }
}
