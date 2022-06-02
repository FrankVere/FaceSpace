import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import SignIn from "./SignIn";
// import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <SignIn />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #cc6600;
  height: 55px;
  align-items: center;
`;

export default Header;
