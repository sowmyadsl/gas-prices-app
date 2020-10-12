import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../../Components/Search';
import { setLocation } from '../../state/actions';

test('renders search and dispatches setLocation event', () => {
    const dispatch = jest.fn();
    const searchElement = render(<Search dispatch={dispatch} />);
    const input = searchElement.getByPlaceholderText("Search Zip");
    
    expect(input).toBeTruthy();
    fireEvent.change(input, { target: { value: '97006' } });
    expect(input.value).toBe('97006');
    const searchButton = searchElement.getByTestId("search-button");
    expect(searchButton).toBeTruthy();
    fireEvent.click(searchButton);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(setLocation({zipcode: '97006'}));
});
