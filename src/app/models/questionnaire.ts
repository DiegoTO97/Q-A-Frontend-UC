import { Question } from "./question";

export class Questionnaire{
    id?: number;
    name: string;
    description: string;
    creationDate?: Date;
    questionsList: Question[];

    constructor(name: string, description: string, creationDate: Date, questionsList: Question[])
    {
        this.name = name;
        this.description = description;
        this.creationDate = creationDate;
        this.questionsList = questionsList;
    }
}