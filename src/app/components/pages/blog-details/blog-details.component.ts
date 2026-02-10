import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss'],
    standalone: true,
    imports: [RouterLink, FormsModule]
})
export class BlogDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
