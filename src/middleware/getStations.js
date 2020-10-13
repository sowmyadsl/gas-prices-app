import {
  getStationsPending,
  getStationsSuccess,
  getStationsFailure,
} from '../state/actions';
import { fetchStations } from '../services/fetchStations';
import { generateGasPrice, generateErrorMsg } from '../utils/stationUtils';

export const getStations = (
  latitude = '',
  longitude = '',
  zipcode = '',
) => async (dispatch) => {
  dispatch(getStationsPending());
  try {
    const data = await fetchStations(latitude, longitude, zipcode);
    if (!data) {
      dispatch(getStationsFailure(generateErrorMsg(latitude, longitude, zipcode)));
    } else {
      const filteredStations = data.fuel_stations.filter(
        (station) => station.access_code.toLowerCase() === 'public',
      );
      const withPrice = filteredStations.map((station) => ({
        ...station,
        price: generateGasPrice(3),
      }));
      dispatch(getStationsSuccess(withPrice));
    }
  } catch (e) {
    dispatch(getStationsFailure(`Unable to fetch data for Zip: ${zipcode}`));
  }
};

export default getStations;
