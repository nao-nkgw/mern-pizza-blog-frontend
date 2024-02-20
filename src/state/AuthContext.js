import {createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//Define first user
const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

//manage the states in global
export const AuthContext = createContext(initialState);

//set user data in localstroge


export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
