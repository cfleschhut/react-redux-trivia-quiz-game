import * as types from '../constants/actionTypes';
import { getApiUrl } from '../api';
import {
  AnswerObject,
  FetchQuestionsRequestAction,
  FetchQuestionsSuccessAction,
  SelectAnswerAction,
  ResetGameAction
} from '../types';
import { Dispatch } from 'redux';

export const fetchQuestions = () => {
  return (
    dispatch: Dispatch<
      FetchQuestionsRequestAction | FetchQuestionsSuccessAction
    >
  ) => {
    dispatch({ type: types.QUESTIONS_FETCH_REQUEST, loading: true });

    fetch(getApiUrl())
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: types.QUESTIONS_FETCH_SUCCESS,
          questions: data.results,
          loading: false
        });
      })
      .catch(error => console.log(error));
  };
};

export const selectAnswer = ({
  questionIndex,
  answerIndex
}: AnswerObject): SelectAnswerAction => ({
  type: types.ANSWER_SELECTED,
  payload: {
    questionIndex,
    answerIndex
  }
});

export const resetGame = (): ResetGameAction => ({
  type: types.GAME_RESET
});
