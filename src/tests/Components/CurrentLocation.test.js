import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CurrentLocation from '../../Components/CurrentLocation';
import { setLocation } from '../../state/actions';

test('renders search and dispatches setLocation event', () => {
  const dispatch = jest.fn();
  const searchElement = render(<CurrentLocation dispatch={dispatch} />);
  const locationButton = searchElement.getByTestId('current-location');

  expect(locationButton).toBeTruthy();
  fireEvent.click(locationButton);
  expect(dispatch).toHaveBeenCalledTimes(1);
  expect(dispatch).toHaveBeenCalledWith(setLocation({ zipcode: '' }));
});
