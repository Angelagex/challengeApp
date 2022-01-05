import { types } from "../types/types";

const initialState = {
  user: [],
};

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userAddNew:
      return {
        ...state,
        user: [action.payload, ...state.user],
      };

    case types.userLoad:
      return {
        ...state,
        user: [...action.payload],
      };

    default:
      return state;
  }
};
