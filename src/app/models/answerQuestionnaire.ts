import { AnswerQuestionnaireDetail } from "./answerQuestionnaireDetail";

export class AnswerQuestionnaire{
    questionnaireId!: number;
    participantName!: string;
    listAnsQuestionnaireDetail!: AnswerQuestionnaireDetail[];
}