import * as types from "../actions/ActionTypes";

export default function counter(state = initialSate, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, number: state.number + 1 };
    case types.DECREMENT:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
}
