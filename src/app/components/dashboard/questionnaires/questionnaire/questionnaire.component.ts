import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  questionnaireId: number;
  loading = false;
  questionnaire: any = {};

  constructor(private questionnaireService: QuestionnairesService,
              private aRoute: ActivatedRoute) { 
                this.questionnaireId = +this.aRoute.snapshot.paramMap.get('id')!;
              }

  ngOnInit(): void {
    this.getQuestionnaire();
  }

  getQuestionnaire(): void{
    this.loading = true;
    this.questionnaireService.getQuestionnaire(this.questionnaireId).subscribe(data=> {
      this.loading = false;
      this.questionnaire = data;
      console.log('here');
      console.log(data);
    });
  }

}
