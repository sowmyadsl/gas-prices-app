import React from "react";
import styled from "styled-components";

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100vh;
  color: Red;
  background-color: lightgrey;
`;

const Error = ({ error }) => (
  <ErrorMessage>
    {error}
  </ErrorMessage>
);

export default Error;
