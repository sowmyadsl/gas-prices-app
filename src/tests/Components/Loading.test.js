import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Loading from '../../Components/Loading';

test('renders the Loading element', () => {
    const loadingElement = render(<Loading loading={true} />);
    const spinner = loadingElement.getByTestId("spinner");
    expect(spinner).toBeTruthy();
});
