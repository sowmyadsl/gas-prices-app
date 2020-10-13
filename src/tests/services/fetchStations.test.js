import { fetchStations, getUrl } from '../../services/fetchStations';
import { mockStations } from '../mocks/mockStations';

describe('fetchStations', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should get list of stations when a zipcode is provided', async () => {
    fetch.mockResponseOnce(JSON.stringify({ stations: mockStations }));
    const actualResponse = await fetchStations(null, null, '97229');
    expect(actualResponse).toEqual({ stations: mockStations });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(getUrl(null, null, '97229'));
  });

  it('should get list of stations when longitude and latitude are available', async () => {
    fetch.mockResponseOnce(JSON.stringify({ stations: mockStations }));
    const actualResponse = await fetchStations('123.233', '41.323', null);
    expect(fetch).toHaveBeenCalledWith(getUrl('123.233', '41.323', null));
  });
});
