import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import CARD_TYPES from '../constants/cardTypes';

const CardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

/**
 *  CardList Component
 * @param {object} props - component props
 * @returns {JSX} react component
 */
function CardList({ stations }) {
  return (
    <CardListContainer>
      {stations.map((station, i) => <Card key={i} station={station} type={CARD_TYPES.default} />)}
    </CardListContainer>
  );
}

CardList.propTypes = {
  stations: PropTypes.arrayOf(
    PropTypes.shape({
      station_name: PropTypes.string.isRequired,
      street_address: PropTypes.string.isRequired,
      distance: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CardList;
