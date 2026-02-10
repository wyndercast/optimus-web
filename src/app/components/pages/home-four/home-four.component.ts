import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home-four',
    templateUrl: './home-four.component.html',
    styleUrls: ['./home-four.component.scss'],
    standalone: true,
    imports: [FormsModule]
})
export class HomeFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
