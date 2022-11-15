import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerQuestionnaire } from 'src/app/models/answerQuestionnaire';
import { AnswerQuestionnaireService } from 'src/app/services/answer-questionnaire.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  questionnaireId: number;
  loading = false;
  answerQuestionnaireList: any = {};

  constructor(private aRoute: ActivatedRoute,
              private answerQuestionnaireService: AnswerQuestionnaireService) { 
                this.questionnaireId = +this.aRoute.snapshot.paramMap.get('id')!;
              }

  ngOnInit(): void {
    this.getListQuestionnaireService();
  }

  getListQuestionnaireService(): void{
    this.loading = true;
    this.answerQuestionnaireService.getListQuestionnaireResponse(this.questionnaireId).subscribe(data => {
      this.loading = false;
      this.answerQuestionnaireList = data;
      console.log(data);
    });
  }
}
