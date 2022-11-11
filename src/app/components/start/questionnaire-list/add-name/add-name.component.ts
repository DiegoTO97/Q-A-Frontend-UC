import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerQuestionnaireService } from 'src/app/services/answer-questionnaire.service';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
export class AddNameComponent implements OnInit {
  participantName = '';

  constructor(private router: Router,
              private answerQuestionnaire: AnswerQuestionnaireService) { }

  ngOnInit(): void {
    if(this.answerQuestionnaire.questionnaireId == null){
      this.router.navigate(['/start']);
    }
  }

  nextStep(): void {
    this.answerQuestionnaire.participantName = this.participantName;
    this.router.navigate(['/start/question']);
  }
}
