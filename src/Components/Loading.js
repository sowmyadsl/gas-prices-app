import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const loadingStyle = `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 80vh;
`;

function Loading(loading) {
  return (
    <div data-testid="spinner">
      <PulseLoader
        css={loadingStyle}
        size={15}
        color={"#05B6BF"}
        loading={loading}
      />
    </div>
  );
}

export default Loading;
