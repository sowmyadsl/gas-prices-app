import React from 'react';
import { getByText, render, within } from '@testing-library/react';
import Card from '../../Components/Card';
import { mockStations } from '../mocks/mockStations';
import CARD_TYPES from '../../constants/cardTypes';

test('should display cardHeader with station name, icon and title', () => {
  const type = CARD_TYPES.default;
  const station = mockStations[0];
  const CardElement = render(<Card station={station} type={type} />);
  const CardHeaderElement = CardElement.getByTestId('card-header');
  expect(CardHeaderElement).toBeTruthy();
  const { getByText } = within(CardHeaderElement);
  expect(getByText(station.station_name)).toBeInTheDocument();
  const CardIconElement = CardElement.getByTestId('card-icon');
  const CardTitleElement = CardElement.getByTestId('card-title');
  expect(CardIconElement).toBeTruthy();
  expect(CardTitleElement).toBeTruthy();
});
