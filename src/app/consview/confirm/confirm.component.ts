import { Component, OnInit } from '@angular/core';

import {ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
import {Positioning} from 'angular2-bootstrap-confirm/position';

const options: ConfirmOptions = new ConfirmOptions();
options.focusButton = 'confirm';

@Component({
  selector: 'app-confirm',
  // templateUrl: './confirm.component.html',
  template: `
          <button
                class="btn btn-default"
                mwlConfirm
                [title]="title"
                [message]="message"
                placement="left"
                (confirm)="confirmClicked = true"
                (cancel)="cancelClicked = true"
                [(isOpen)]="isOpen">
          Click me!
          </button>
  `,
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  public title: string = 'Popover title';
  public message: string = 'Popover description';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  public isOpen: boolean = false;


  constructor() { }

  ngOnInit() {
  }

}
