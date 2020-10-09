import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import styled from "styled-components";
import { getCheapestStation, getClosestStation } from '../utils/stationUtils';
import CARD_TYPES from '../constants/cardTypes';

const CardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const Upsell = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: center;
 width: 100%;
 background-color: rgba(255,255,255,0.5);
`;

function CardList({ stations }) {
  const cheapestStation = getCheapestStation(stations);
  const closestStation = getClosestStation(stations);

  return (
    <CardListContainer>
      <Upsell>
        {<Card key="cheapest" station={cheapestStation} type={CARD_TYPES.cheapest} />}
        {<Card key="closest" station={closestStation} type={CARD_TYPES.closest} />}
      </Upsell>
      {stations.map((station, i) => {
        return <Card key={i} station={station} type={CARD_TYPES.default} />;
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
