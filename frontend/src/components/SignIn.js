import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const currentUser = localStorage.getItem("name");
  return (
    <StyledNavLink to="/signin">
      {currentUser ? `Howdy ${currentUser}!` : "Sign In Here!"}{" "}
    </StyledNavLink>
  );
};

const StyledNavLink = styled(NavLink)`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: "League Gothic", sans-serif;
  font-size: 30px;
  margin-right: 20px;
`;

export default SignIn;
