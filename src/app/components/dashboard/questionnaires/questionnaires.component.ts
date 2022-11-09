import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Questionnaire } from 'src/app/models/questionnaire';
import { LoginService } from 'src/app/services/login.service';
import { QuestionnairesService } from 'src/app/services/questionnaires.service';

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.css']
})
export class QuestionnairesComponent implements OnInit {
  userName!: string;
  questionnaireList: Questionnaire[] = [];
  loading = false;

  constructor(private loginService: LoginService, 
              private questionnaireService: QuestionnairesService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUserName();
    this.getQuestionnaire();
  }

  getUserName(): void{
    console.log(this.loginService.getTokenDecoded());
    this.userName = this.loginService.getTokenDecoded().sub;
  }

  getQuestionnaire(): void {
    this.loading = true;
    this.questionnaireService.getListQuestionnaire().subscribe(data => {
      this.loading = false;
      console.log(data);
      this.questionnaireList = data;
    }, error => {
      this.loading = false;
      console.log(error);
    });
  }

  deleteQuestionnaire(questionnaireId: number): void {
    if(confirm('There are you sure you want to delete the questionnaire?')){
      this.loading = true;
      this.questionnaireService.deleteQuestionnaire(questionnaireId).subscribe(data => {
        this.loading = false;
        this.toastr.success('The questionnaire was deleted successfully', 'Questionnaire Deleted');
        this.getQuestionnaire();
      }, error => {
        this.loading = false;
        this.toastr.error('Ups', 'Error');
      });
    }
  }
}
