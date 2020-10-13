import React from 'react';
import { render } from '@testing-library/react';
import CardPrice from '../../Components/CardPrice';

test('Prefixes $ to the price while rendering Card Price', () => {
  const price = 3;
  const CardPriceElement = render(<CardPrice price={price} />);
  const textToDisplay = CardPriceElement.getByText('$3.00');
  expect(textToDisplay).toBeTruthy();
});

test('Truncates the price to 2 decimals while rendering Card Price', () => {
  const price = 3.142857;
  const CardPriceElement = render(<CardPrice price={price} />);
  const textToDisplay = CardPriceElement.getByText('$3.14');
  expect(textToDisplay).toBeTruthy();
});
