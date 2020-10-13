import React from 'react';
import styled from 'styled-components';

const AppFooter = styled.div`
  background-color: red;
  background-color: #3c3d48;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #e9ecf1;
  font-weight: 600;
  height: 5vh;
  padding: 0 1vw;
  width: 98vw;
  height: 50px;
  width: 100%;
  bottom: 0px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #e9ecf1;
  font-size: calc(0.5em + 0.5vw);
  max-width: 40vw;
  padding: 0 1vw;
`;

const CopyRight = styled.span`
  font-size: calc(0.5em + 0.5vw);
  padding: 0 1vw;
`;

function Footer() {
  return (
    <AppFooter>
      <StyledLink href="https://clearbit.com"> Logos provided by Clearbit&trade; </StyledLink>
      <CopyRight> &reg; Sowmya Dinavahi</CopyRight>
    </AppFooter>
  );
}

export default Footer;
