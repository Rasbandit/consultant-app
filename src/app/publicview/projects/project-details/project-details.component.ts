import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs/Rx';

import { Project } from '../project';
import { ProjectService } from '../project.service';




@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styles: [],

})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private projectIndex: number;

  selectedProject: Project;

  constructor(
              private route: ActivatedRoute,
              private projectService: ProjectService
            ) { }


  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.projectIndex = params['id'];
        this.selectedProject = this.projectService.getProject(this.projectIndex)
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}
