import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ClientService } from '../client.service';
import { Client } from '../client-list/client';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit, OnDestroy {
  clientForm: FormGroup
  private clientIndex: number
  private client: Client;
  private isNew = true;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private clientService: ClientService,
              private formBuilder: FormBuilder,
            private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.clientIndex = +params['id']
          this.client = this.clientService.getClient(this.clientIndex);
        } else {
          this.isNew = true;
          this.client = null;
        }
        this.initForm();
      }
    );
  }

  onSubmit() {
    const newClient = this.clientForm.value;
    if (this.isNew) {
     this.clientService.addClient(newClient)
    } else {
     this.clientService.editClient(this.client, newClient)
    }
   this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddNote(desc: string, amount: string) {
    (<FormArray>this.clientForm.controls['notes']).push(
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
    (<FormArray>this.clientForm.controls['notes']).removeAt(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['/list']);
  }

  private initForm() {
    let clientName = '';
    let clientImageUrl = '';
    let clientContent = '';
    let clientNotes: FormArray = new FormArray([]);
    // let clientLocation: FormArray = new FormArray([]);

    if (!this.isNew) {
      if (this.client.hasOwnProperty('notes')) {
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
      }

      clientName = this.client.name;
      clientImageUrl = this.client.imagePath;
      clientContent = this.client.description;
    }
    // clientLocation.push(
    //   new FormGroup({
    //     lat: new FormControl(this.client.location.lat, [
    //       Validators.required,
    //       Validators.pattern("\\d+")
    //     ]),
    //     long: new FormControl(this.client.location.long, [
    //       Validators.required,
    //       Validators.pattern("\\d+")
    //     ])
    //   })
    // )
    this.clientForm = this.formBuilder.group({
      name: [clientName, Validators.required],
      imagePath: [clientImageUrl, Validators.required],
      description: [clientContent, Validators.required],
      notes: clientNotes,
      // location: clientLocation,
    });
  }

}
