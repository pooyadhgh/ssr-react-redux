import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions';

const UsersPage = () => {
  const users = useSelector((state) => state.users);
  const dispath = useDispatch();

  useEffect(() => {
    if (!users.length) {
      dispath(fetchUsers());
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Users List</title>
      </Helmet>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async (store) => {
  await store.dispatch(fetchUsers());
};

export default { component: UsersPage, getServerSideProps };
