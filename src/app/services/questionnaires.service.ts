import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Questionnaires } from '../models/questionnaires';

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
    this.myApiUrl = '/api/Questionnaires';
  }

  saveQuestionnaires(questionnaires: Questionnaires): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, questionnaires);
  }
}
