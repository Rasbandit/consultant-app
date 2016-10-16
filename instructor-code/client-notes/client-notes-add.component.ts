import { Component, OnChanges, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

import { Note } from './note';
import { NoteService } from './note.service';
import { Client } from '../../client-list';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-client-notes-add',
  templateUrl: './client-notes-add.component.html',
  styleUrls: ['./client-notes-add.component.css']
})
export class ClientNotesAddComponent implements OnInit, OnDestroy, OnChanges {
// clientnotesAdd-
@Input() note: Note;
@Output() cleared = new EventEmitter();
isAdd = true;

//new from recipe-edit
noteForm: FormGroup
private noteIndex: number
private client: Client;
private isNew = true;
private subscription: Subscription;

  constructor(private noteService: NoteService, //original
              private route: ActivatedRoute, //added for notes
              private formBuilder: FormBuilder, //added for notes
              private router: Router) { } //added for notes

  ngOnInit() {
    // added to edit and add notes...
        this.subscription = this.route.params.subscribe(
          (params: any) => {
            if (params.hasOwnProperty('id')) {
              this.isNew = false;
              this.noteIndex = +params['id']
              this.note = this.noteService.getNote(this.noteIndex);
            } else {
              this.isNew = true;
              this.note = null;
            }

          }
        );
  }

  ngOnChanges(changes) {
    //original part of cna
    if (changes.note.currentValue === null) {
      this.isAdd = true;
      this.note = {desc: null, amount: null}
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(note: Note) {
    const newNote = new Note(note.desc, note.amount);
    if (!this.isAdd) {
      this.noteService.editNote(this.note, newNote)
      this.onClear();
    } else {
      this.note = newNote;
      this.noteService.addNote(this.note);
    }
    console.log(this.noteService);
  }

  onDelete() {
    this.noteService.deleteNote(this.note);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null)
  }

  private initForm() {
    // let clientName = '';
    // let clientImageUrl = '';
    // let clientContent = '';
    let clientNotes: FormArray = new FormArray([]);

    if (!this.isNew) {
      for (let i = 0; i < this.client.notes.length; i++) {
        clientNotes.push(
          new FormGroup({
            desc: new FormControl(this.client.notes[i].desc, Validators.required),
            amount: new FormControl(this.client.notes[i].amount, [
              Validators.required,
              Validators.pattern("\\d+")
            ])
          })
        );
      }
      // clientName = this.client.name;
      // clientImageUrl = this.client.imagePath;
      // clientContent = this.client.description;
    }
    this.noteForm = this.formBuilder.group({
      // name: [clientName, Validators.required],
      // imagePath: [clientImageUrl, Validators.required],
      // description: [clientContent, Validators.required],
      notes: clientNotes
    });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
