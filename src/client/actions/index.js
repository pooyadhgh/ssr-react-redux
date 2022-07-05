import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async (dispatch) => {
  const { data } = await axios.get(`${BASE_URL}/users`);

  dispatch({
    type: FETCH_USERS,
    payload: data,
  });
};
