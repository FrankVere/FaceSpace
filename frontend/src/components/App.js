import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Profile from "./Profile";
import SignInPage from "./SignInPage";
import { UserContext } from "../UserContext";
import { useEffect } from "react";
import React from "react";

const App = () => {
  const {
    actions: { loadAllUsers },
  } = React.useContext(UserContext);

  useEffect(() => {
    fetch(`/api/users`)
      .then((res) => res.json())
      .then((json) => {
        loadAllUsers(json.data);
      });
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/page-1">Page 1</Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
