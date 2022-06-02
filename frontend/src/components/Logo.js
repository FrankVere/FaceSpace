import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/">Facespace</StyledNavLink>
    </Wrapper>
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
  margin-left: 20px;
`;

const Wrapper = styled.div``;

export default Logo;
