import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Search from "./Search";
import UpsellCards from "./UpsellCards";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const Header = styled.div`
  background-color: #3c3d48;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #e9ecf1;
  font-weight: 600;
  height: 10vh;
  width: 100%;
`;
const HeaderTitle = styled.div`
  font-size: 5vw;
  text-align: center;
  padding-left: 3%;
  min-width: 15vw;
`;

/**
 * Gas Price App Header
 * @param {object} props - Component props
 * @returns {JSX} react component
 */
function AppHeader({ dispatch, stations, zipcode }) {
  return (
    <HeaderContainer>
      <Header>
        <HeaderTitle>Gas Buddy</HeaderTitle>
        <Search dispatch={dispatch} zipcode={zipcode} />
      </Header>
      <UpsellCards stations={stations} />
    </HeaderContainer>
  );
}

AppHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  stations: PropTypes.array.isRequired,
  zipcode: PropTypes.string,
}

AppHeader.defaultPropTypes = {
  zipcode: '',
}

export default AppHeader;
