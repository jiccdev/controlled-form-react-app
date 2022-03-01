import React from 'react';

import User from './User';

const UsersList = ({ users }) => {
  return (
    <div className="grid grid-rows-1 h-40 shadow-md rounded-lg m-4 p-1 bg-slate-500 overflow-y-scroll">
      {users.map((user) => (
        <User key={user.name} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
