import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Questionnaire } from '../models/questionnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionnairesService {
  myAppUrl: string;
  myApiUrl: string;
  questionnaireTitle!: string;
  questionnaireDescription!: string;

  constructor(private http: HttpClient) {
    
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = '/api/Questionnaire/';
  }

  saveQuestionnaires(questionnaire: Questionnaire): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, questionnaire);
  }

  getListQuestionnaireByUser(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + 'GetListQuestionnaireByUser')
  }

  deleteQuestionnaire(questionnaireId: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + questionnaireId);
  }

  getQuestionnaire(questionnaireId: number): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + questionnaireId);
  }

  getListQuestionnaire(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + 'GetListQuestionnaire')
  }
}
