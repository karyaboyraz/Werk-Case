import {FETCH_TODOS} from '../Actions/Types';
export default (state = {}, action) => {
    switch(action.type) {
      case FETCH_TODOS:
        return action.payload;
      default:
        return state;
    }
  };