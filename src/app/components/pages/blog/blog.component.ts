import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
