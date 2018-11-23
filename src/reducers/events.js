import { READ_EVENTS } from '../actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return { ...state }
    default:
      return state;
  }
}