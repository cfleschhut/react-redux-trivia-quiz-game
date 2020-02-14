import * as types from '../contants/actionTypes';

const getApiUrl = () => {
  const API_BASE_URL = 'https://opentdb.com/api.php';
  const params = Object.entries({
    amount: 4,
    category: 9,
    difficulty: 'easy',
    type: 'multiple'
  })
    .map(([key, value], i) => `${i === 0 ? '?' : '&'}${key}=${value}`)
    .join('');

  return `${API_BASE_URL}${params}`;
};

export const fetchQuestions = () => {
  return dispatch => {
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

export const selectAnswer = (questionIndex, answerIndex) => {
  return {
    type: types.ANSWER_SELECTED,
    payload: {
      questionIndex,
      answerIndex
    }
  };
};

export const resetGame = () => {
  return {
    type: types.GAME_RESET
  };
};
