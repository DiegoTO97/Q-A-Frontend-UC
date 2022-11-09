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

  constructor(private questionnaireService: QuestionnairesService,
              private aRoute: ActivatedRoute) { 
                this.questionnaireId = +this.aRoute.snapshot.paramMap.get('id')!;
              }

  ngOnInit(): void {
  }

  getQuestionnaire(): void{

    this.questionnaireService.getQuestionnaire(this.questionnaireId).subscribe(data=> {
      console.log(data);
    });
  }

}
