import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { mockStations } from './mocks/mockStations';

test('renders app', () => {
  const dispatch = jest.fn();
  const getStations = jest.fn();
  const { getByText } = render(
    <App dispatch={dispatch} stations={mockStations} getStations={getStations} />,
  );
  const headerElement = getByText(/Gas Buddy/i);
  expect(headerElement).toBeInTheDocument();
});
