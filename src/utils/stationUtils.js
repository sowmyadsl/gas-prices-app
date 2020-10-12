import {
  getStationsPending,
  getStationsSuccess,
  getStationsFailure
} from "../state/actions";
import { fetchStations } from "../services/fetchStations";

export const generateGasPrice = threshold => {
  let price = threshold;
  for (let i = 0; i <= 10; i++) {
    if (price >= threshold) {
      price = Math.random() * 10;
    }
  }
  return price <= threshold ? price : 0;
};

export const getCheapestStation = stations => {
  return stations.reduce((min, s) => (min.price < s.price ? min : s));
};

export const getClosestStation = stations => {
  return stations.reduce((min, s) => (min.distance < s.distance ? min : s));
};

export const getStations = (
  latitude = null,
  longitude = null,
  zipcode = null
) => {
  return async dispatch => {
    dispatch(getStationsPending());
    try {
      if ((latitude && longitude)|| zipcode) {
        const data = await fetchStations(latitude, longitude, zipcode);
        if (!data) {
          throw  ({error: `Unable to fetch data for Zip: ${zipcode}`}); 
        }
        const filteredStations = data.fuel_stations.filter(
          station => station.access_code.toLowerCase() === "public"
        );
        const withPrice = filteredStations.map(station => {
          return { ...station, price: generateGasPrice(3) };
        });
        dispatch(getStationsSuccess(withPrice));
      }
    } catch (e) {
      dispatch(getStationsFailure(`Unable to fetch data for Zip: ${zipcode}`));
    }
  };
};

export default getStations;
