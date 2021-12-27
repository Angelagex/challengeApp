import { types } from "../types/types";

const initialState = {
  question: [],
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.questionAddNew:
      return {
        ...state,
        question: [action.payload, ...state.question],
      };

    case types.questionLoad:
      return {
        ...state,
        question: [...action.payload],
      };

    default:
      return state;
  }
};
