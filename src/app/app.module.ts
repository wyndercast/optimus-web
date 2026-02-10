import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { CommonModule, NgClass } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { WebinarComponent } from './components/pages/webinar/webinar.component';
import { ModalWebinarComponent } from './components/modal-webinar/modal-webinar.component';


@NgModule({
  imports: [FormsModule,ReactiveFormsModule, BrowserModule, NgClass, CommonModule, NgOptimizedImage],
  declarations: [HomeThreeComponent, WebinarComponent, ModalWebinarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
