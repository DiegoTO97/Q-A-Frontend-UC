import { Answer } from './answer';

export class Question{
    description: string;
    answersList: Answer[];
    hide?: boolean;

    constructor(description: string, answers: Answer[]){
        this.description = description;
        this.answersList = answers;
        this.hide = true;
    }
}