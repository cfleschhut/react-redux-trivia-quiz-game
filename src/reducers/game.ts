import * as types from '../constants/actionTypes';

const INITIAL_STATE = {
  questions: [],
  loading: false,
  questionsAnswered: [],
  score: 0
};

const amendChoices = (questions: any) => {
  const getChoices = ({ correct_answer, incorrect_answers }: any) => {
    const randomPosition = Math.floor(
      Math.random() * (incorrect_answers.length + 1)
    );

    return [
      ...incorrect_answers.slice(0, randomPosition),
      correct_answer,
      ...incorrect_answers.slice(randomPosition)
    ];
  };

  return questions.map((question: any) => ({
    ...question,
    choices: getChoices(question)
  }));
};

export const gameReducer: any = (state = INITIAL_STATE, action: any) => {
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
      const question: any = questions[questionIndex];
      const answer = question.choices[answerIndex];

      return {
        ...state,
        questionsAnswered: [
          ...state.questionsAnswered,
          {
            question: questionIndex,
            answer: answerIndex
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
