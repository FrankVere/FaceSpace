import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import ProfilePhoto from "./ProfilePhoto";
import { UserContext } from "../UserContext";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  const { state } = React.useContext(UserContext);
  const getFriends = sessionStorage.getItem("friendsOfUser");
  const friendsID = getFriends ? getFriends.split(",") : null;

  if (friendsID) {
    return (
      <Wrapper>
        <Header />
        <WrapperTwo>
          {state.allUsers.map((user) => {
            return friendsID.includes(user.id) ? (
              <NavLinks to={`/profile/${user.id}`}>
                <FriendsProfilePhoto user={user} src={user.avatarUrl} />
              </NavLinks>
            ) : (
              <ProfilePhoto user={user} src={user.avatarUrl} />
            );
          })}
        </WrapperTwo>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Header />
        <WrapperTwo>
          {" "}
          {state.allUsers.map((user) => {
            return <ProfilePhoto user={user} />;
          })}
        </WrapperTwo>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div``;
const FriendsProfilePhoto = styled.img`
  height: 175px;
  width: 175px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 8px;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;
  border: 3px solid red;

  :hover {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);

    @keyframes glitch {
      0% {
        clip-path: var(--slice-1);
        transform: translate(-20px, -10px);
      }
      10% {
        clip-path: var(--slice-3);
        transform: translate(10px, 10px);
      }
      20% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 10px);
      }
      30% {
        clip-path: var(--slice-3);
        transform: translate(0px, 5px);
      }
      40% {
        clip-path: var(--slice-2);
        transform: translate(-5px, 0px);
      }
      50% {
        clip-path: var(--slice-3);
        transform: translate(5px, 0px);
      }
      60% {
        clip-path: var(--slice-4);
        transform: translate(5px, 10px);
      }
      70% {
        clip-path: var(--slice-2);
        transform: translate(-10px, 10px);
      }
      80% {
        clip-path: var(--slice-5);
        transform: translate(20px, -10px);
      }
      90% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 0px);
      }
      100% {
        clip-path: var(--slice-1);
        transform: translate(0);
      }
    }
`;

const NavLinks = styled(NavLink)``;

const WrapperTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;
  height: 80vh;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 10rem;
`;

export default Homepage;
