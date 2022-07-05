import React from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../actions';

const UsersPage = () => {
  const users = useSelector((state) => state.users);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export const getServerSideProps = async (store) => {
  await store.dispatch(fetchUsers());
};

export default { component: UsersPage, getServerSideProps };
