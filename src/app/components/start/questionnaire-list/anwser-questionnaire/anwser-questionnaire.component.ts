import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questionnaire } from 'src/app/models/questionnaire';
import { AnswerQuestionnaireService } from 'src/app/services/answer-questionnaire.service';

@Component({
  selector: 'app-anwser-questionnaire',
  templateUrl: './anwser-questionnaire.component.html',
  styleUrls: ['./anwser-questionnaire.component.css']
})
export class AnwserQuestionnaireComponent implements OnInit {
  questionnaire!: Questionnaire;
  answerUser: number[] = [];

  constructor(private answerQuestionnaire: AnswerQuestionnaireService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.answerQuestionnaire.questionnaireId == null){
      this.router.navigate(['/start']);
    } else {
      this.questionnaire = this.answerQuestionnaire.questionnaire;
      this.answerUser = this.answerQuestionnaire.answers;
    }
  }

}
