import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import usersApi from "../api/usersApi";
import DisplayUsers from "../components/DisplayUsers";


function Users() {
  const { getUsersData } = usersApi();
  const getUsers = useSelector((state) => state.users.users);

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      <div className="usersContainer">
        <DisplayUsers users={getUsers}></DisplayUsers>
  
      </div>
    </>
  );
}

export default Users;
