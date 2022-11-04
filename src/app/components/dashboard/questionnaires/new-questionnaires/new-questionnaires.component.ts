import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-new-questionnaires',
  templateUrl: './new-questionnaires.component.html',
  styleUrls: ['./new-questionnaires.component.css']
})
export class NewQuestionnairesComponent implements OnInit {

  constructor(){}
    

  ngOnInit(): void {
  }

}
