import { FETCH_USERS } from '../actions/constants';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
