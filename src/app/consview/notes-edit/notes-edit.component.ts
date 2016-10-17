import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit, OnDestroy {
  noteForm: FormGroup
  private noteIndex: number
  private note: Note;
  private notes: Note[];
  private isNew = true;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private noteService: NoteService,
              private formBuilder: FormBuilder,
            private router: Router) { }

  ngOnInit() {
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
        this.initForm();
      }
    );
  }

  onSubmit() {
    const newNote = this.noteForm.value;
    if (this.isNew) {
     this.noteService.addNote(newNote)
   } else {
     this.noteService.editNote(this.note, newNote)
   }
   this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddNote(desc: string, amount: string) {
    (<FormArray>this.noteForm.controls['notes']).push(
      new FormGroup({
        desc: new FormControl(desc, Validators.required),
        amount: new FormControl(amount, [
          Validators.required,
          Validators.pattern("\\d+")
        ])
      })
    );
  }

  onRemoveNote(index: number) {
    (<FormArray>this.noteForm.controls['notes']).removeAt(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['/list']);
  }

  private initForm() {
    let notes: FormArray = new FormArray([]);

    if (!this.isNew) {
      for (let i = 0; i < this.notes.length; i++) {
        notes.push(
          new FormGroup({
            desc: new FormControl(this.note[i].desc, Validators.required),
            amount: new FormControl(this.note[i].amount, [
              Validators.required,
              Validators.pattern("\\d+")
            ])
          })
        );
      }
    }

  }

}
