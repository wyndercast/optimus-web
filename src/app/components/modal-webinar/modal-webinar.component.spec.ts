import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWebinarComponent } from './modal-webinar.component';

describe('ModalWebinarComponent', () => {
  let component: ModalWebinarComponent;
  let fixture: ComponentFixture<ModalWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalWebinarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
