import React from 'react';

const User = ({ user }) => {
  return (
    <div className="border border-slate-400 rounded-md">
      <p>Name: {user.name}</p>
      <p>Lastname: {user.lastname}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default User;
