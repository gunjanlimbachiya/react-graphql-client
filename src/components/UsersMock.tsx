import React, { useEffect } from 'react'
import { getUsers } from '../apis/mockApi';

const UsersMock = () => {


    async function fetchUsers() {
        try {
          const users = await getUsers();
          console.log('Fetched users:', users);
          // Handle users data here
        } catch (error) {
          // Handle errors
        }
      }
      

    useEffect(()=>{
      fetchUsers();

    },[])
  return (
    <div>Users</div>
  )
}

export default UsersMock;