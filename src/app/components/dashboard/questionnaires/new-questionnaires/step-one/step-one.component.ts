import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  questionnaireData: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private questionnaireService: QuestionnairesService) { 
    this.questionnaireData = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  stepOne(): void {
    this.questionnaireService.questionnaireTitle = this.questionnaireData.value.title;
    this.questionnaireService.questionnaireDescription = this.questionnaireData.value.description;
    this.router.navigate(['/dashboard/newQuestionnaire/stepTwo']);
  }
}
