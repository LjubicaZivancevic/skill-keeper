import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DisplayUsers from "../components/DisplayUsers";

function BookedUsers() {
  const bookedUsersRedux = useSelector((state) => state.bookedUsers.bookedUsers);
  const allUsers = useSelector((state) => state.users.users);
  const [bookedUsers, setBookedUsers] = useState([])

  useEffect(()=>{
      getBookedUsers()
  },[bookedUsersRedux])

  const getBookedUsers = () => {
    const filteredUsers = []
       allUsers.map((user) => {
      bookedUsersRedux.map((bookedUser) => {
        if (user.id === bookedUser.id) {
           const userData = {...user, date: bookedUser.date}
          filteredUsers.push(userData)
        }
      });
    });

    setBookedUsers(filteredUsers)
    console.log(filteredUsers);
  };

  return  <div className="usersContainer"><DisplayUsers users={bookedUsers} booked={true}></DisplayUsers></div>;
}

export default BookedUsers;
