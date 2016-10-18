import { Component, Input } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent {

  @Input() project: Project;
  @Input() projectId: number;

  log() {
    console.log(this.project);
  }

}
