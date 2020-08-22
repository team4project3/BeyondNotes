import React, { useEffect, useState } from 'react';
import API from '../../utils/API';

const User = () => {
  const [users, setUsers] = useState({
    username: ""
  });

  // async function getUsers() {
  //   const response = await fetch('/api/user_data');
  //   const users = await response.json();
  //   setUsers(users);
  // }


  const fetchData = async () => {
    try {
        const response = await fetch('/api/user_data');
        const users = await response.json();
      setUsers({username:users.email})
        return users;
    } catch (error) {
        throw error;
    }
};
console.log(users)

  useEffect(() => {
      fetchData()
          // .then(users)
          // .catch(error => {
          //     console.warn(JSON.stringify(error, null, 2));
          // });
  }, []);





  // useEffect(() => {
  //   // const response = await fetch('/api/user_data');
  //   const response =  fetch('/api/user_data');
  //   // const users = await response.json();
  //   const users =  response.json();
  //   API.getUsers.then((response) => {
  //     setUsers(users);
  //     // console.log(username);
  //     console.log(users);
  //   });
  // }, []);

  // async function getUsers() {
  //   const response = await fetch('/api/user_data');
  //   const users = await response.json();
  //   setUsers(users);
  // }

  return (
    <div>
      <h1>{users.username}</h1>
    </div>
    // <ul>
    //   {users.map(user => (
    //     <li>{user.name}</li>
    //   ))}
    // </ul>
  );
};

export default User;

  