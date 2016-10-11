import { Component, OnInit } from '@angular/core';

import { Note, ClientNotesService } from '../../consview';

@Component({
  selector: 'app-client-notes',
  templateUrl: './client-notes.component.html',
  styleUrls: ['./client-notes.component.css']
})
export class ClientNotesComponent implements OnInit {

  notes: Note[] = [
    // new Note('dummy note', 93),
    // new Note('Meeting', 2)
  ];
  note = new Note('dummy note', 93);
  note2 = new Note('Meeting', 2)

  // constructor(private clientNotesService: ClientNotesService) { }

  ngOnInit() {
    // this.notes = this.clientNotesService.getNotes();
  }

}
