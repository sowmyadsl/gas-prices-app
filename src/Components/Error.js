import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BiErrorCircle } from 'react-icons/bi';

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100vh;
  color: Red;
  font-style: italic;
  padding: 5vw;
`;

const Error = ({ error }) => (
  <ErrorMessage>
    <BiErrorCircle />
    {error}
  </ErrorMessage>
);

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
