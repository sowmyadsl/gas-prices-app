import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Price = styled.div`
  color: #595c62;
  font-size: 18px;
  font-weight: 600;
  margin: auto 10px;
  padding: 2%;
  border-left: 1px solid #c7c9cc;
  line-height: 3;
`;

/**
 *  CardPrice Component
 * @param {object} props - component props
 * @returns {JSX} react component
 */
function CardPrice({ price = 0 }) {
  return (
    <Price>
      $
      {price.toFixed(2)}
    </Price>
  );
}

CardPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default CardPrice;
