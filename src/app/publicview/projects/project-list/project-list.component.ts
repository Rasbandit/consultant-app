import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ProjectItemComponent } from './project-item.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  onSelected(project: Project) {
  }

}
