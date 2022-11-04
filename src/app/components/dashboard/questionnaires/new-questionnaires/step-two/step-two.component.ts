import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Question } from 'src/app/models/question';
import { Questionnaires } from 'src/app/models/questionnaires';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  questionnaireTitle!: string;
  questionnaireDescription!: string;
  questionsList: Question[] = [];


  constructor(private questionnaireService: QuestionnairesService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.questionnaireTitle = this.questionnaireService.questionnaireTitle;
    this.questionnaireDescription = this.questionnaireService.questionnaireDescription;
  }

  saveQuestion(question: Question): void {
    this.questionsList.push(question);
    console.log(this.questionsList);
  }

  deleteQuestion(index: number):void {
    this.questionsList.splice(index,1);
  }

  saveQuestionnaireForm(): void{
    const questionnaire: Questionnaires = {
      name: this.questionnaireTitle,
      description: this.questionnaireDescription,
      questionsList: this.questionsList
    };

    //send questionnaire backend
    this.questionnaireService.saveQuestionnaires(questionnaire).subscribe(data =>{
      this.toastr.success('The questionnaire was registered successfully', 'Questionnaire registered');
      this.router.navigate(['/dashboard']);
    }, error =>{
      this.toastr.error('Ups.. error', 'error');
      this.router.navigate(['/dashboard']);
    });
  }
}
