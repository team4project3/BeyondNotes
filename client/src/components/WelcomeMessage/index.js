//provides the welcome "email" message on the nav bar
import React, { useEffect, useState } from 'react';
import API from '../../utils/API';

const User = () => {
  const [users, setUsers] = useState({
    username: ""
  });

  

//fetching data from api
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
      <h6>Welcome {users.username}</h6>
    </div>
    
  );
};

export default User;

  