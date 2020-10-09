import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: #3c3d48;
  display: flex;
  align-items: center;
  color: #E9ECF1;
  font-size: 5vh;
  font-weight: 600;
  height: 10vh;
  width: 100vw;
  text-align: center;
  padding-left: 1%;
  margin: 1vh 0;
  transition: all .7s ease-in;
`;

function AppHeader({ text }) {
    return <Header>{text}</Header>;
}

export default AppHeader;
