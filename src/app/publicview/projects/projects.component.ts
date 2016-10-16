import {  Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  
})
export class ProjectsComponent implements OnInit {

  selectedProject: Project;

  constructor() { }

  ngOnInit() {
  }

}
