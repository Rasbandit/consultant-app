import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription} from 'rxjs/Rx';
import { Headers, Http } from '@angular/http';
// import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Client } from '../client-list';
import { NoteService } from '../note.service';
import { ClientService } from '../client.service';
import { ClientEditComponent } from '../client-edit/client-edit.component';

// import { Project } from '../../publicview/projects/project';
import { ProjectService } from '../../publicview/projects/project.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit, OnDestroy {
  // projectForm: FormGroup;  //these three added for location
  // private client: Client;
  // private isNew = true;

  selectedClient: Client;
  private subscription: Subscription;
  private clientIndex: number;

// private clientForm: this.clientEditComponent.clientForm;

  constructor(private noteService: NoteService,
              private projectService: ProjectService,
              private route: ActivatedRoute,
              private clientService: ClientService,
              private router: Router,

              // private formBuilder: FormBuilder,  //added for location
              // private clientEditComponent: ClientEditComponent,
              ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.clientIndex = params['id'];
        this.selectedClient = this.clientService.getClient(this.clientIndex);
      }
    );


  }


  onEdit() {
    this.router.navigate(['/list', this.clientIndex, 'edit']);
  }

  onDelete() {
    this.clientService.deleteClient(this.selectedClient);
    this.router.navigate(['/list']);
  }

  onAddToNotes() {
    this.noteService.addNotes(this.selectedClient.notes);
  }

  onComplete() {
  //
  //   //added for location
  //   // const newProject = this.projectForm.value;
  //   // this.projectService.addProject(newProject);
    this.navigateBack();
  //   // this.projectService.addProject(this.completeForm(this.selectedClient));
  //
  //   // original
    this.projectService.addProject(this.selectedClient);

    // http request
    // this.clientService.onComplete(this.clientIndex).subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    // );
  }

  private navigateBack() {
    this.router.navigate(['/list']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

//added for location

    // private completeForm() {
    //   let clientName = '';
    //   let clientImageUrl = '';
    //   let clientContent = '';
    //   let clientNotes: FormArray = new FormArray([]);
    //   let clientLocation: FormArray = new FormArray([]);
    //
    //   // if (!this.isNew) {
    //     for (let i = 0; i < this.client.notes.length; i++) {
    //       clientNotes.push(
    //         new FormGroup({
    //           desc: new FormControl(this.client.notes[i].desc, Validators.required),
    //           amount: new FormControl(this.client.notes[i].amount, [
    //             Validators.required,
    //             Validators.pattern("\\d+")
    //           ])
    //         })
    //       );
    //
    //     }
    //
    //     clientLocation.push(
    //       new FormGroup({
    //         lat: new FormControl(this.client.location.lat, [
    //           Validators.required,
    //           Validators.pattern("\\d+")
    //         ]),
    //         long: new FormControl(this.client.location.long, [
    //           Validators.required,
    //           Validators.pattern("\\d+")
    //         ])
    //       })
    //     );
    //
    //     clientName = this.client.name;
    //     clientImageUrl = this.client.imagePath;
    //     clientContent = this.client.description;
    //   // }
    //
    //   this.projectForm = this.formBuilder.group({
    //     client: this.clientForm = this.formBuilder.group({
    //       name: [clientName, Validators.required],
    //       imagePath: [clientImageUrl, Validators.required],
    //       description: [clientContent, Validators.required],
    //       notes: clientNotes,
    //       location: clientLocation,
    //     })
    //   });
    // }



}
