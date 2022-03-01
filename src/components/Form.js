import { useState } from 'react';
import useForm from '../hooks/useForm';

import UsersList from './UsersList';
import Input from './Input';
import Button from './Button';

const Form = () => {
  const [users, setUsers] = useState([]);

  const [inputsForm, handleInputChange, resetForm] = useForm({
    name: '',
    lastname: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, inputsForm]);
    resetForm();
    // output -> [{inputsForms}]
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 bg-slate-800"
      >
        <Input
          label="Nombre"
          name="name"
          value={inputsForm.name}
          onChange={handleInputChange}
        />

        <Input
          label="Lastname"
          name="lastname"
          value={inputsForm.lastname}
          onChange={handleInputChange}
        />

        <Input
          label="Email"
          name="email"
          value={inputsForm.email}
          onChange={handleInputChange}
        />

        <Button>Send</Button>
      </form>

      <p className="text-center text-gray-500 text-xs">
        &copy;2022 José Contreras. All rights reserved.
      </p>

      {users.length ? <UsersList users={users} /> : null}
    </div>
  );
};

export default Form;
