import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Question } from 'src/app/models/question';
import { Questionnaire } from 'src/app/models/questionnaire';
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
  loading = false;


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
    this.questionsList.splice(index, 1);
  }

  saveQuestionnaireForm(): void{
    const questionnaire: Questionnaire = {
      name: this.questionnaireTitle,
      description: this.questionnaireDescription,
      questionsList: this.questionsList
    };
    this.loading  = true;

    console.log("aqui");
    console.log(questionnaire);

    //send questionnaire backend
    this.questionnaireService.saveQuestionnaires(questionnaire).subscribe(data =>{
      this.toastr.success('The questionnaire was registered successfully', 'Questionnaire registered');
      this.loading  = false;
      this.router.navigate(['/dashboard']);
    }, error =>{
      this.toastr.error('Ups.. error', 'error');
      this.loading  = false;
      this.router.navigate(['/dashboard']);
    });
  }
}
