import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
