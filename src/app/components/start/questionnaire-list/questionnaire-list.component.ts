import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questionnaire } from 'src/app/models/questionnaire';
import { AnswerQuestionnaireService } from 'src/app/services/answer-questionnaire.service';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.css']
})
export class QuestionnaireListComponent implements OnInit {
  loading = false;
  questionnairesList: any = {};

  constructor(private questionnaireService: QuestionnairesService,
              private router: Router,
              private answerQuestionnaire: AnswerQuestionnaireService) { }

  ngOnInit(): void {
    this.getListQuestionnaire();
  }

  getListQuestionnaire(): void {
    this.loading = true;
    this.questionnaireService.getListQuestionnaire().subscribe(data =>{
      this.loading = false;
      this.questionnairesList = data;
      console.log(data);
    });
  }

  addName(questionnaireId: number): void{
    this.answerQuestionnaire.questionnaireId = questionnaireId;
    this.router.navigate(['/start/addName']);
  }

}
