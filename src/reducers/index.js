import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
};

export default function counter (state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        count: ++state.count
      };
    case DECREMENT:
      return {
        count: --state.count
      };
    default:
      return state;
  }
}
