import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Icon = styled.div`
  border-radius: 50%;
  width: 56px;
  height: 56px;
  overflow: hidden;
`;

const CardLogo = styled.img`
  width: auto;
  height: 100%;
  display: inline;
  margin: 0 auto;
`;

const availableStations = [
  "walgreens",
  "thprd",
  "star",
  "providence",
  "space",
  "touchmark",
  "udp",
  "the",
  "star",
  "murray",
  "vernier",
  "carr",
  "kohl’s",
  "only",
  "uhaul",
  "greenlots",
  "chevron",
  "shell",
  "arco",
  "costco"
];

const mapStationToLogoName = stationName => {
  let name = stationName.toLowerCase().split(" ")[0];
  name = name.replace(/[^\w\s]/gi, "");
  name = availableStations.includes(name) ? name : "gasdigitalnetwork";
  return name;
};

/**
 *  CardIcon Component 
 * @param {object} props - component props
 * @returns {JSX} react component
 */
function CardIcon({ station }) {
  const name = mapStationToLogoName(station.station_name);
  return (
    <Icon>
      <CardLogo data-testid="card-icon" src={`//logo.clearbit.com/${name}.com`} />
    </Icon>
  );
}

CardIcon.propTypes = {
  station: PropTypes.object.isRequired,
}

export default CardIcon;
