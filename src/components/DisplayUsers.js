import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

function DisplayUsers(props) {


  return (
    <>
      {props.users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          location={user.location}
          dateOfBirth={user.dateOfBirth}
          date={user.date}
          skills={user.skills}
          booked={props.booked}
        />
      ))}
    </>
  );
}

export default DisplayUsers;
