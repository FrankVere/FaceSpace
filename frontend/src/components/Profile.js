import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import ProfilePhoto from "./ProfilePhoto";
import { UserContext } from "../UserContext";
import Header from "./Header";
import image from "./facespace_bg.jpg";

const Profile = () => {
  const { state } = React.useContext(UserContext);
  const [profileUser, setProfileUser] = useState({});
  const [friendsOfUser, setFriendsOfUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProfileUser(json.data);
        setFriendsOfUser(json.data.friends);
      });
  }, [id]);

  return (
    <Wrapper>
      <Header />
      <CoverImg>
        <Image src={image} />
      </CoverImg>
      <UserContainer>
        <UserPhoto src={profileUser.avatarUrl} />
        <UserName>{profileUser.name}</UserName>
      </UserContainer>
      <Divider>
        <SplitText>Friends of {profileUser.name}</SplitText>
      </Divider>
      <ListOfFriends>
        {state.allUsers.map((user) => {
          return friendsOfUser.map((id) => {
            if (user.id === id) {
              return (
                <>
                  <WrapperTwo>
                    <ProfilePhoto user={user} />
                    <FriendName>{user.name}</FriendName>
                  </WrapperTwo>
                </>
              );
            }
          });
        })}
      </ListOfFriends>
    </Wrapper>
  );
};

const UserName = styled.h2`
  margin-left: 20px;
`;
const UserPhoto = styled.img`
  width: 400px;
  height: 400px;
  border: 5px solid green;
  margin: 100px 0 50px 100px;
`;
const Wrapper = styled.div`
  position: relative;
`;
const WrapperTwo = styled.div``;
const FriendName = styled.p`
  font-family: "League Gothic", sans-serif;
  color: black;
  display: block;
  background: lightgrey;
  margin: 9px;
  text-align: center;
`;
const ListOfFriends = styled.div`
  display: flex;
  position: absolute;
  left: 10%;
  top: 140%;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 10%;
  top: 40%;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 90%;
`;
const CoverImg = styled.div`
  height: 40vh;
  overflow: hidden;
`;
const Divider = styled.div`
  border-bottom: 2px solid orange;
  width: 50%;
  position: absolute;
  left: 10%;
  top: 135%;
`;
const SplitText = styled.p`
  font-family: "League Gothic", sans-serif;
  color: orange;
`;

export default Profile;
