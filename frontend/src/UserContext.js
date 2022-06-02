import React from "react";

export const UserContext = React.createContext();

const initialState = {
  allUsers: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loadusers": {
        console.log(action)
      return {
        ...state,
        allUsers: action.userInfo,
      };
  }
}
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  //Functions
  const loadAllUsers = (data) => {
    dispatch({ type: "loadusers", userInfo: data });
  };

  return (
    <UserContext.Provider
      value={{ state, actions: { loadAllUsers } }}
    >
      {children}
    </UserContext.Provider>
  );
};