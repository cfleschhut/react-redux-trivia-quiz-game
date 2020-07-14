export type GameState = {
  questions: Question[];
  loading: boolean;
  questionsAnswered: AnswerObject[];
  score: number;
};

export interface Question {
  category: string;
  choices: string[];
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface AnswerObject {
  questionIndex: number;
  answerIndex: number;
}

export interface FetchQuestionsRequestAction {
  type: string;
  loading: boolean;
}

export interface FetchQuestionsSuccessAction {
  type: string;
  questions: Question[];
  loading: boolean;
}

export interface SelectAnswerAction {
  type: string;
  payload: AnswerObject;
}

export interface ResetGameAction {
  type: string;
}
