import { createReducer } from "@reduxjs/toolkit";
import { bookUser, removeFromBookingList } from "../actions/booking.actions";

const initialState = {
  bookedUsers: [],
};

const bookingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(bookUser, (state, action) => {
      state.bookedUsers.push(action.payload);
    })
    .addCase(removeFromBookingList, (state, action) => {
      return {
        ...state,
        bookedUsers: state.bookedUsers.filter(
          (user) => user.id !== action.payload
        ),
      };
    });
});
export default bookingReducer;
