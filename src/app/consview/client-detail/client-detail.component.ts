import { Component, OnInit, Input } from '@angular/core';

import { Client } from '../../consview';
import { ClientNotesService } from '../../consview';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  @Input() selectedClient: Client;

  // constructor(private clientNotesService: ClientNotesService) { }

  ngOnInit() {
  }

  onAddToNotes() {
    // this.clientNotesService.addNotes(this.selectedClient.notes);
  }

}
