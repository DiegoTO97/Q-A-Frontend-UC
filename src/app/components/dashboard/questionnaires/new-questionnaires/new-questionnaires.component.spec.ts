import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionnairesComponent } from './new-questionnaires.component';

describe('NewQuestionnairesComponent', () => {
  let component: NewQuestionnairesComponent;
  let fixture: ComponentFixture<NewQuestionnairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQuestionnairesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewQuestionnairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
