import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnswerQuestionnaire } from '../models/answerQuestionnaire';
import { Questionnaire } from '../models/questionnaire';

@Injectable({
  providedIn: 'root'
})
export class AnswerQuestionnaireService {
  myAppUrl: string;
  myApiUrl: string;
  
  participantName!: string;
  questionnaireId!: number;
  answers: number[] = [];
  questionnaire!: Questionnaire;

  constructor(private http: HttpClient) {
    
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = '/api/AnswerQuestionnaire/';
   }

   saveAnswerQuestionnaire(answerQuestionnaire: AnswerQuestionnaire): Observable<any>{
    return this.http.post( this.myAppUrl + this.myApiUrl, answerQuestionnaire);
   }

   getListQuestionnaireResponse(questionnaireId: number): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + questionnaireId );
   }
}
