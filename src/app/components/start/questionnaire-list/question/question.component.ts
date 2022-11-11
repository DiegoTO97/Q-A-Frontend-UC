import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerQuestionnaire } from 'src/app/models/answerQuestionnaire';
import { AnswerQuestionnaireDetail } from 'src/app/models/answerQuestionnaireDetail';
import { Question } from 'src/app/models/question';
import { AnswerQuestionnaireService } from 'src/app/services/answer-questionnaire.service';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionnaireId!: number;
  questionList: Question[] = [];
  loading = false;
  confirmAnswer = false;
  optionSelect: any;
  index = 0;
  answerIdSelect!: number;

  listAnswerDetail: AnswerQuestionnaireDetail[] = [];


  constructor(private answerQuestionnaire: AnswerQuestionnaireService,
              private questionnaireService: QuestionnairesService,
              private router: Router) { }

  ngOnInit(): void {
    this.questionnaireId = this.answerQuestionnaire.questionnaireId;
    if(this.questionnaireId == null){
      this.router.navigate(['/start']);
      return;
    }
    this.getQuestionnaire();
    this.answerQuestionnaire.answers = [];
  }

  getQuestionnaire(): void {
    this.loading = true;
    this.questionnaireService.getQuestionnaire(this.questionnaireId).subscribe(data =>{
      this.loading = false
      this.questionList = data.questionsList;
      this.answerQuestionnaire.questionnaire = data;
    });
  }

  getQuestion(): string{
    return this.questionList[this.index].description;
  }

  getIndex(): number {
    return this.index;
  }

  answerSelect(answer: any, answerId: any): void{
    this.optionSelect = answer;
    this.confirmAnswer = true;
    this.answerIdSelect = answerId;
  }

  AddClassOption(answer: any): string{
    if(answer == this.optionSelect){
      return 'active text-light';
    }
    return '';
  }

  nextStep():void {
    this.answerQuestionnaire.answers.push(this.answerIdSelect);

    //Create Object AnswerDetail
    const answerDetail: AnswerQuestionnaireDetail ={
      answerId: this.answerIdSelect,
    };

    //Add object to the array
    this.listAnswerDetail.push(answerDetail);

    this.index++;
    this.confirmAnswer = false;
    this.answerIdSelect = 0;
    

    if(this.index == this.questionList.length) {
      this.saveAnswerQuestionnaire();
    }
  }

  saveAnswerQuestionnaire(): void{
    const ansQuestionnaire: AnswerQuestionnaire = {
      questionnaireId: this.answerQuestionnaire.questionnaireId,
      participantName: this.answerQuestionnaire.participantName,
      listAnsQuestionnaireDetail: this.listAnswerDetail
    };
    this.loading = true;
    this.answerQuestionnaire.saveAnswerQuestionnaire(ansQuestionnaire).subscribe(data =>{
      this.loading = false;
      this.router.navigate(['/start/answerQuestionnaire']);
    }, error => {
      this.loading = false;
      console.log(error);
    });
  }
}
