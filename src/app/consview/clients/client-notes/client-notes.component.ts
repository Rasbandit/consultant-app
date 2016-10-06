import { Component, OnInit } from '@angular/core';

import { Note } from './note';

@Component({
  selector: 'app-client-notes',
  templateUrl: './client-notes.component.html',
  styleUrls: ['./client-notes.component.css']
})
export class ClientNotesComponent implements OnInit {

  notes: Note[] = [];
  note = new Note('DummyNoteName', 'DummyNoteDesc', 'https://source.unsplash.com/random/400x300');

  constructor() { }

  ngOnInit() {
  }

}
