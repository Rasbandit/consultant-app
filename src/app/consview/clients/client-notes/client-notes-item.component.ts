import { Component, OnInit, Input } from '@angular/core';

import { Note } from './note';



@Component({
  selector: 'app-client-notes-item',
  templateUrl: './client-notes-item.component.html',
  styles: []
})
export class ClientNotesItemComponent implements OnInit {

  @Input() note: Note;
  noteId: number;

  constructor() { }

  ngOnInit() {
  }

}
