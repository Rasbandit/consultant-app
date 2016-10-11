import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../client-notes';

@Component({
  selector: 'app-client-notes-item',
  templateUrl: './client-notes-item.component.html',
  styleUrls: ['./client-notes-item.component.css']
})
export class ClientNotesItemComponent implements OnInit {

  @Input() note: Note;
  noteId: number;

  constructor() { }

  ngOnInit() {
  }

}
