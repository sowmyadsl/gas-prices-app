import React from "react";
import styled from "styled-components";
import CardIcon from "./CardIcon";
import CardPrice from "./CardPrice";
import CARD_TYPES from "../constants/cardTypes";
import CardChip from "./Chip";


const WithUpsell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CardWrapper = styled.div`
  margin: 10px;
  padding: 10px 2px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.type || CARD_TYPES.default};
  box-shadow: 0 1px 2px #dadce0;
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  &:hover {
    box-shadow: 5px 5px 15px grey;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const CardHeader = styled.div`
  display: flex;
  padding-left: 5px;
  flex-direction: row;
  align-items: center;
  align-content: space-around;
`;

const CardBody = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 400;
`;

const CardTitle = styled.div`
  margin-left: 5%;
  font-size: 14px;
  font-weight: 600;
  width: 70%;
  display: inline-block;
  whitespace: no-wrap;
  color: #3c3d48;
`;

const CardDistanceText = styled.div`
  color: grey;
  font-size: 12px;
`;

const CardAddressText = styled.div`
  color: dimgrey;
  padding: 5px 0px;
  font-size: 12px;
  font-weight: 600;
`;

const Card = ({ station, type }) => {
  let upSellIndicator = null;
  switch (type) {
    case CARD_TYPES.cheapest:
      upSellIndicator = <CardChip color={CARD_TYPES.cheapest}>Cheapest</CardChip>
      break;
    case CARD_TYPES.closest:
      upSellIndicator = <CardChip color={CARD_TYPES.closest}>Closest</CardChip>
      break;
    default:
  };

  return (
    <WithUpsell>
      {upSellIndicator}
      <CardWrapper className="result-card" type={type}>
        <CardContent>
          <CardHeader>
            <CardIcon station={station} />
            <CardTitle>{station.station_name}</CardTitle>
          </CardHeader>
          <CardBody>
            <CardAddressText>
              {station.street_address}
              <br />
              {station.city} {station.state} {station.zip}
            </CardAddressText>
            <CardDistanceText>
              {station.distance.toFixed(2)} miles
          </CardDistanceText>
          </CardBody>
        </CardContent>
        <CardPrice price={station.price} />
      </CardWrapper>
    </WithUpsell>
  );
};

export default Card;
