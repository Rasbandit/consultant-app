import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Note } from './note';
// import { ClientNotesService } from './client-notes/client-notes.service';
import { Location } from '../shared/location';
import { Client } from './client-list/client';


@Injectable()
export class ClientService {
  private clients: Client[] = [
    new Client('Las vegas', 'The City That Never Sleeps', 'https://unsplash.it/600/400'
    , [
      new Note('Meeting', 2),
      new Note('Phone Call', 7)
    ],
    //added for location [lat, long]
    [new Location(36.1699, -115.1398)]
),
    new Client('Clark County Government Center', 'Clark County Government Center is a Building in Clark County, Nevada. It has an elevation of 621 meters, or 2,037 feet.', 'https://unsplash.it/600/400/?random'
    , [
      new Note('stuff', 6),
      new Note('things', 3),
      new Note('more here lorem ipsum words testing how this works with longer descriptions not sure what else to say', 1.3)
    ],
    //added for location [lat, long]
    [new Location(36.1642134, -115.1545523)]
  )
  ];

  constructor(private http: Http) { }

  getClients() {
    return this.clients;
  }

  getClient(id: number) {
    return this.clients[id];
  }

  deleteClient(client: Client) {
    this.clients.splice(this.clients.indexOf(client), 1);
  }
  addClient(client: Client) {
    this.clients.push(client);
  }

  editClient(oldClient: Client, newClient: Client) {
    this.clients[this.clients.indexOf(oldClient)] = newClient;
  }

  storeData() {
    const body = JSON.stringify(this.clients);
    const headers = new Headers ({
      'Content-Type': 'application/json'
    })
    this.http.post("postgres://dougmaxfield@localhost/mg-test/current_clients.json", body, {headers: headers});
  }

  onComplete() {
    const body = JSON.stringify(this.clients);
    const headers = new Headers ({
      'Content-Type': 'application/json'
    });
    return this.http.post("postgres://dougmaxfield@localhost/mg-test/completed_clients.json", body, {headers: headers});
  }

  fetchData() {}

}
