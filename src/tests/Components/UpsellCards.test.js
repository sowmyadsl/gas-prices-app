import React from 'react';
import { render } from '@testing-library/react';
import UpsellCards from '../../Components/UpsellCards';
import { mockStations } from '../mocks/mockStations';
import { getCheapestStation, getClosestStation } from '../../utils/stationUtils';

jest.mock('../../utils/stationUtils', () => (
    {
        getCheapestStation: jest.fn().mockReturnValue({
            city: "Portland",
            country: "US",
            distance: 2.16412,
            latitude: 45.526404,
            longitude: -122.814925,
            price: 1.39,
            state: "OR",
            station_name: "Cheapest Gas Station",
            station_phone: "888-264-2204",
            street_address: "1 Cheapest Rd",
            zip: "97229",
        }),
        getClosestStation: jest.fn().mockReturnValue({
            city: "Portland",
            country: "US",
            distance: 3.16412,
            latitude: 45.526404,
            longitude: -122.814925,
            price: 1.23,
            state: "OR",
            station_name: "Closest Gas Station",
            station_phone: "888-264-2208",
            street_address: "1 Closest Rd",
            zip: "97229",
        }),
    }
));

test('no cards should be displayed when no stations are sent', () => {
    const noStations = [];
    const upsellCards = render(<UpsellCards stations={noStations} />);
    expect(upsellCards).toBeTruthy();

    expect(getCheapestStation).toHaveBeenCalledTimes(0);
    expect(getClosestStation).toHaveBeenCalledTimes(0);
});

test('tests upsell cards', () => {
    const upsellCards = render(<UpsellCards stations={mockStations} />);
    expect(upsellCards).toBeTruthy();
    expect(getCheapestStation).toHaveBeenCalled();
    expect(getClosestStation).toHaveBeenCalled();

    const closestCard = upsellCards.getByText('Closest Gas Station');
    const cheapestCard = upsellCards.getByText('Cheapest Gas Station');

    expect(closestCard).toBeTruthy();
    expect(cheapestCard).toBeTruthy();
});