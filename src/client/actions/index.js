import axios from 'axios';
import { BASE_URL, FETCH_USERS } from './constants';

export const fetchUsers = () => async (dispatch) => {
  const { data } = await axios.get(`${BASE_URL}/users`);

  dispatch({
    type: FETCH_USERS,
    payload: data,
  });
};
