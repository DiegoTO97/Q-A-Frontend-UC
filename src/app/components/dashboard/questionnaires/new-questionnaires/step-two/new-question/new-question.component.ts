import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  newQuestion: FormGroup;
  question!: Question;
  correctAns = 0;
  @Output() sendQuestion = new EventEmitter<Question>();

  constructor(private fb: FormBuilder,
              private toastr: ToastrService) {
    this.newQuestion = this.fb.group({
      title: ['', Validators.required],
      answer: this.fb.array([])
    })
  }

  ngOnInit(): void {
    this.addAnswerByDefault();
  }

  //Return answer array
  get getAnswer(): FormArray {
    return this.newQuestion.get('answer') as FormArray;
  }

  //Add answer array
  addAnswer(): void {
    this.getAnswer.push(this.fb.group({
      description: ['', Validators.required],
      isCorrect: 0
    }));
  }

  addAnswerByDefault(): void{
    this.addAnswer();
    this.addAnswer();
  }

  deleteAnswer(index: number): void{
    if(this.getAnswer.length === 2){
      this.toastr.error('The question must contain at least two answers', 'Error');
    } else {
      this.getAnswer.removeAt(index);
    }
  }

  setAnswerValid(index: number): void{
    this.correctAns = index;
  }

  addQuestion():void {
    //Obtain title
    const questionDescription = this.newQuestion.get('title')!.value;

    //Obtain answer array
    const answerArray = this.newQuestion.get('answer')!.value;

    //Create new answer array
    const ansArray: Answer[] = [];
    let band: boolean = false;

    answerArray.forEach((element: any, index: any) => {
     const answer: Answer = new Answer(element.description, false);
      if(index === this.correctAns && index != 0){
        answer.isCorrect= true;
        band = true;
      }
      ansArray.push(answer);
      });
     if(!band)
     {
      ansArray[0].isCorrect = true;
     }

    const question: Question = new Question(questionDescription, ansArray);
    console.log(question);
    this.sendQuestion.emit(question);
    this.resetForm();
  }

  resetForm(): void{
    this.correctAns = 0;
    this.newQuestion.reset();
    this.getAnswer.clear();
    this.addAnswerByDefault();
  }
}
