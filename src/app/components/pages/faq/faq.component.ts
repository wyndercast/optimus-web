import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
    standalone: true,
    imports: [RouterLink, FormsModule]
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
