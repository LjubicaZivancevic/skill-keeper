import React from 'react'
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUsers, addUser, deleteUser } from '../actions/users.actions';

function UsersApi() {
    const apiURL = "https://6195285474c1bd00176c6be7.mockapi.io/profiles";
    const dispatch = useDispatch();

    const getUsersData = async () => {
        try {
          const response = await axios
            .get(apiURL)
            .then((response) => dispatch(setUsers(response.data)));
          console.log("Axios", response);
          return response;
        } catch (err) {
          console.log(err);
        }
      };

      
  const addUserData  = async (userData) => {
    try {
      const response = axios
        .post(apiURL, userData)
        .then((response) => { console.log(response); dispatch(addUser(response));  getUsersData();});
      console.log("User added", response);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  const removeUser = async (id) => {
    axios
      .delete(`${apiURL}/${id}`)
      .then((response) => {
        dispatch(deleteUser(response.data));
        getUsersData();
      })
      .catch((err) => console.log(err));
  };


    return {
      getUsersData,
      addUserData,
      removeUser
    }
      
 
}

export default UsersApi
