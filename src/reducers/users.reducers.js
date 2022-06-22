import { createReducer } from "@reduxjs/toolkit";
import { setUsers, addUser, deleteUser } from "../actions/users.actions";

const initialState = {
    users: [],
    searchTerm: null, 
    sortTerm: null
  };

const userReducer = createReducer(initialState, (builder) =>{
    builder
    .addCase(setUsers, (state, action) =>{
        state.users = action.payload
    })
    .addCase(addUser, (state, action) => {
        state.users.push(action.payload);
      })
    .addCase(deleteUser, (state, action)  => {
        state.users.filter((user) => user.id !== action.payload)
      
      })
})

export default userReducer;