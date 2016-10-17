import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Note } from './note';
// import { ClientNotesService } from './client-notes/client-notes.service';
import { Location } from '../shared/location';
import { Client } from './client-list/client';


@Injectable()
export class ClientService {
clientsChanged = new EventEmitter<Client[]>();

  private clients: Client[] = [];

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
    this.http.post("https://maxfieldgroup-87132.firebaseio.com/clients.json", body, {headers: headers});
  }

  onComplete(id: number) {
    const body = JSON.stringify(this.clients[id]);
    // const body = JSON.stringify(client: Client);
    const headers = new Headers ({
      'Content-Type': 'application/json'
    });
    return this.http.post("https://maxfieldgroup-87132.firebaseio.com/projects.json", body, {headers: headers});
  }

  fetchData() {
    return this.http.get("https://maxfieldgroup-87132.firebaseio.com/clients.json")
      .map((response: Response) => response.json())
      .subscribe(
        (data: Client[]) => {
          this.clients = data;
          this.clientsChanged.emit(this.clients);
        }
      );
  }
}
