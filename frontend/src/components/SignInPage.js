import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useHistory } from "react-router-dom";
import image from "./facespace_bg.jpg";

const SignInPage = () => {
    const redirect = useHistory();
    useEffect(() => {
        const existingUser = localStorage.getItem("name");
        if (existingUser) {
            redirect.push("/"); //You can delete Jim from the dependency array to sign out and revisit sign in page //
        }
    }, []);
    const [firstName, setFirstName] = useState("");
    const signInHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        fetch(`/api/signin`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({firstName: firstName})
        }) .then((res) => res.json()) 
            .then ((data) => {
                if (data.status === 200) {
                    localStorage.setItem("name", firstName);
                    console.log(data);
                    localStorage.setItem("friendsOfUser", data.data.friends);
                    redirect.push("/");
                }
                else {
                    window.alert("Wrong User!")
                }
            })
    }
  return (
    <>
    <Header />
    <Image src={image}/>
    <Wrapper>
      <StyledForm onSubmit={signInHandler}>
          <input type="text" placeholder="Your first name" onChange={(e) => {
             setFirstName(e.target.value) 
          }}/>
          <StyledButton>Submit</StyledButton>
      </StyledForm>
    </Wrapper>
    </>
  );
};

const Image = styled.img`
width: 100%;
height: 100%;
left: 0;
top: 0;
position: absolute;
z-index: -1;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 80vh;
`;

const StyledForm = styled.form`
display: flex;
flex-direction: column;
padding: 2rem;
background: lightgrey;`;

const StyledButton = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

&:hover,
.button:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.button:hover {
  transform: translateY(-1px);
}

.button:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
};`;


export default SignInPage;
