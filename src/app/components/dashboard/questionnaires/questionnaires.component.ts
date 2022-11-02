import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.css']
})
export class QuestionnairesComponent implements OnInit {
  userName!: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName(): void{
    this.userName = this.loginService.getUserName();
  }

}
