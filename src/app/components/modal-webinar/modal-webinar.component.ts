import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import 'add-to-calendar-button';

@Component({
  selector: 'app-modal-webinar',
  templateUrl: './modal-webinar.component.html',
  styleUrl: './modal-webinar.component.scss'
})
export class ModalWebinarComponent {
  constructor(public modalRef: MdbModalRef<ModalWebinarComponent>) {}
}
