import React from "react";
import styled from "styled-components";

const Price = styled.div`
  color: grey;
  font-size: 32px;
  font-weight: 600;
  margin: auto 10px;
  padding: 10px;
`;

const generateGasPrice = threshold => {
  let price = threshold;
  for (let i = 0; i <= 10; i++) {
    if (price >= threshold) {
      price = Math.random() * 10;
    }
  }
  return price <= threshold ? price : 0;
};

function CardPrice({ price = 0 }) {
  const displayPrice = price
    ? price.toFixed(2)
    : generateGasPrice(3).toFixed(2);

  return <Price>${displayPrice}</Price>;
}

export default CardPrice;
