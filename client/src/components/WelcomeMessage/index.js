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
          
  }, []);

  

  return (
    <div>
      <p>Welcome {users.username}</p>
    </div>
    
  );
};

export default User;

  