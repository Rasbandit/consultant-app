import { Component, OnInit } from '@angular/core';

import { Client } from './client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  client = new Client('DummyClientName', 'DummyClientDesc', 'https://source.unsplash.com/random/400x300');
  constructor() { }

  ngOnInit() {
  }

}
