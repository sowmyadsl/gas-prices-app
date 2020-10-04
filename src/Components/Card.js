import React from "react";
import styled from "styled-components";
import CardIcon from "./CardIcon";
import CardPrice from "./CardPrice";

const CardWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  box-shadow: 1px 2px 5px #888888;
  justify-content: space-between;
  width: 400px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const CardHeader = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  align-content: space-around;
`;

const CardBody = styled.div`
  padding: 0 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 200;
`;

const CardTitle = styled.div`
  margin-left: 5%;
  font-size: 20px;
  font-weight: 600;
  width: 70%;
  display: inline-block;
  whitespace: no-wrap;
`;

const CardDistanceText = styled.div`
  color: grey;
  padding: 5px 0px;
`;

const CardAddressText = styled.div`
  color: dimgrey;
  font-weight: 400;
  padding: 5px 0px;
`;

const Card = ({ station }) => {
  return (
    <CardWrapper className="result-card">
      <CardContent>
        <CardHeader>
          <CardIcon station={station} />
          <CardTitle>{station.station_name}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardDistanceText>
            {station.distance.toFixed(2)} miles
          </CardDistanceText>
          <CardAddressText>
            {station.street_address}
            <br />
            {station.city} {station.state} {station.zip}
          </CardAddressText>
        </CardBody>
      </CardContent>
      <CardPrice price={0} />
    </CardWrapper>
  );
};

export default Card;
