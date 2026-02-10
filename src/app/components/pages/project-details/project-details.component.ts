import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class ProjectDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
