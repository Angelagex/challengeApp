import { types } from "../types/types";

const initialState = {
  question: [],
  active: {
    title: "",
    responsible: "",
    description: "",
    priority: "",
  },
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

    case types.questionActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.questionUpdate:
      console.log(action.payload.id);
      return {
        ...state,
        question: state.question.map((question) =>
          question.id === action.payload.id ? action.payload.question : question
        ),
      };

    case types.questionLogoutClean:
      return {
        ...state,
        active: {
          title: "",
          responsible: "",
          description: "",
          priority: "",
        },
      };

    default:
      return state;
  }
};
