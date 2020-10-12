import React  from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaLocationArrow } from "react-icons/fa";
import { setLocation } from "../state/actions";

const StyledIcon = styled.button`
  font-size: 32px;
  height: 1.25em;
  width: 1.25em;
  margin: 0 0.25em;
  background: none;
  border: none;
  color: white;
  font-size: 18px;
`;

/**
 *  CurrentLocation Component 
 * @param {object} props - component props
 * @returns {JSX} react component
 */
function CurrentLocation({ dispatch }) {
  const resetZip = (e) => {
    e.preventDefault();
    dispatch(setLocation({ zipcode: "" }));
  };

  return (
      <StyledIcon onClick={resetZip} data-testid="current-location">
        <FaLocationArrow />
      </StyledIcon>
  );
}

CurrentLocation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default CurrentLocation;
