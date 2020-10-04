import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import styled from "styled-components";

const CardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

function CardList({ stations }) {
  return (
    <CardListContainer>
      {stations.map((station, i) => {
        return <Card key={i} station={station} />;
      })}
    </CardListContainer>
  );
}

CardList.propTypes = {
  stations: PropTypes.arrayOf(
    PropTypes.shape({
      station_name: PropTypes.string.isRequired,
      street_address: PropTypes.string.isRequired,
      distance: PropTypes.number.isRequired
    })
  ).isRequired
};

export default CardList;
