import * as types from '../constants/actionTypes';
import {
  GameState,
  Question,
  FetchQuestionsRequestAction,
  FetchQuestionsSuccessAction,
  SelectAnswerAction,
  ResetGameAction
} from '../types';
// import { AppState } from '../store';

const INITIAL_STATE: GameState = {
  questions: [],
  loading: false,
  questionsAnswered: [],
  score: 0
};

const amendChoices = (questions: Question[]) => {
  const getRandomizedChoices = ({
    correct_answer,
    incorrect_answers
  }: Question) =>
    [correct_answer, ...incorrect_answers].sort(() => 0.5 - Math.random());

  return questions.map((question: Question) => ({
    ...question,
    choices: getRandomizedChoices(question)
  }));
};

export const gameReducer = (
  state = INITIAL_STATE,
  // action:
  //   | SelectAnswerAction
  //   | ResetGameAction
  //   | FetchQuestionsRequestAction
  //   | FetchQuestionsSuccessAction
  action: any
): GameState => {
  switch (action.type) {
    case types.QUESTIONS_FETCH_REQUEST:
      return {
        ...state,
        loading: action.loading
      };

    case types.QUESTIONS_FETCH_SUCCESS:
      return {
        ...state,
        questions: amendChoices(action.questions),
        loading: action.loading
      };

    case types.ANSWER_SELECTED:
      const { questionIndex, answerIndex } = action.payload;
      const { questions } = state;
      const question: Question = questions[questionIndex];
      const answer = question.choices[answerIndex];

      return {
        ...state,
        questionsAnswered: [
          ...state.questionsAnswered,
          {
            questionIndex,
            answerIndex
          }
        ],
        score: state.score + (answer === question.correct_answer ? 10 : 0)
      };

    case types.GAME_RESET:
      return {
        ...INITIAL_STATE
      };

    default:
      return state;
  }
};
