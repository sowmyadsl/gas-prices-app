import React from 'react';
import { render } from '@testing-library/react';
import CardList from '../../Components/CardList';
import { mockStations } from '../mocks/mockStations';

test('Displays all the stations received', () => {
    const CardListElement = render(<CardList stations={mockStations} />);
    const cardsList = CardListElement.getAllByTestId('card');
    expect(cardsList).toHaveLength(mockStations.length);
});
