import { BASE_URL, FETCH_USERS } from './constants';

export const fetchUsers = () => async (dispatch) => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();

  dispatch({
    type: FETCH_USERS,
    payload: data,
  });
};
