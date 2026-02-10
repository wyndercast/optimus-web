import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-service-term',
  standalone: true,
  imports: [],
  templateUrl: './service-term.component.html',
  styleUrl: './service-term.component.scss'
})
export class ServiceTermComponent {
  constructor(public modalRefTerm: MdbModalRef<ServiceTermComponent>) {}
}
