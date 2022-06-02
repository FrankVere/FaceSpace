import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ProfilePhoto = ({ user }) => {
  return (
    <StyleNavWrapper to={`/profile/${user.id}`}>
      <Photos src={user.avatarUrl} alt="photo" />
    </StyleNavWrapper>
  );
};

const StyleNavWrapper = styled(NavLink)`
  :hover {
    border-color: orange;
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

const Photos = styled.img`
  height: 175px;
  width: 175px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 8px;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;

  :hover {
    border-color: orange;
  }
`;

export default ProfilePhoto;
