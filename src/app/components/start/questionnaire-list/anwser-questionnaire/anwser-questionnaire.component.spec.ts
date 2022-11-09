import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnwserQuestionnaireComponent } from './anwser-questionnaire.component';

describe('AnwserQuestionnaireComponent', () => {
  let component: AnwserQuestionnaireComponent;
  let fixture: ComponentFixture<AnwserQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnwserQuestionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnwserQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
