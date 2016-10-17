import { Component, OnInit } from '@angular/core';

import { ClientService } from '../client.service';
import { Client } from '../client-list/client';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  // client: Client[];
  // notes= this.client.notes
  // constructor(private clientService: ClientService) { }
  //
  ngOnInit() {
  //   this.client.notes = this.clientService.getNotes();
  }

}
