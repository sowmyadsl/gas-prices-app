import React from 'react';
import { render } from '@testing-library/react';
import Chip from '../../Components/Chip';

test('renders chip', () => {
    const color = 'green';
    const chipElement = render(<Chip color={color} >cheapest</Chip> );
    const textToDisplay = chipElement.getByText('cheapest');
    expect(textToDisplay).toBeTruthy();
});
