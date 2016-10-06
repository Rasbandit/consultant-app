import { Component, OnInit, Input } from '@angular/core';

import { Project } from './project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styles: []
})
export class ProjectItemComponent implements OnInit {

  @Input() project: Project;
  projectId: number;

  constructor() { }

  ngOnInit() {
  }

}
