import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
