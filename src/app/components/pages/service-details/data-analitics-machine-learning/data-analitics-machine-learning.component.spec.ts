import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnaliticsMachineLearningComponent } from './data-analitics-machine-learning.component';

describe('DataAnaliticsMachineLearningComponent', () => {
  let component: DataAnaliticsMachineLearningComponent;
  let fixture: ComponentFixture<DataAnaliticsMachineLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAnaliticsMachineLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataAnaliticsMachineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
