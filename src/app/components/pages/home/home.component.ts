import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive, CommonModule],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
