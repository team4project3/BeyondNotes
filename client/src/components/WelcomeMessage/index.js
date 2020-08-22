import React, { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await fetch('/api/user_data');
    const users = await response.json();
    setUsers(users);
  }

  return (
    <ul>
      {users.map(user => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

export default User;

  