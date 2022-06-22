import skillReducer from "../reducers/skills.reducers";
import userReducer from "../reducers/users.reducers";
import { initSagas } from "../sagas";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import bookingReducer from "../reducers/booking.reducer";


/*const store = configureStore = () => {
    const store2 = createStore(
      combineReducers({
        skills: skillReducer,
        users: userReducer,
      }), composeWithDevTools(
        applyMiddleware(...middlewares)
      )
    );
    initSagas(sagaMiddleware);
    return store2;
  };*/

/*const store = configureStore(
  {
    reducer: {
      skills: skillReducer,
      users: userReducer,
    },
  },
  composeWithDevTools(applyMiddleware(...middlewares))
);
*/


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]

const configureStore = () => {
  const store = createStore(
    combineReducers({
      skills: skillReducer,
      users: userReducer,
      bookedUsers: bookingReducer
    }), composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );
  initSagas(sagaMiddleware);
  return store;
};

export default configureStore;
