import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-service-details',
    templateUrl: './service-details.component.html',
    styleUrls: ['./service-details.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class ServiceDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
