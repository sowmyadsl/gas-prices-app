export const generateGasPrice = threshold => {
  return  (threshold + Math.random());
};

export const getCheapestStation = stations => {
  return stations.reduce((min, s) => (min.price < s.price ? min : s));
};

export const getClosestStation = stations => {
  return stations.reduce((min, s) => (min.distance < s.distance ? min : s));
};

export const generateErrorMsg = (latitude, longitude, zipcode) => {
  if (zipcode) return `Unable to fetch data for zip: ${zipcode}`;
  return `Unable to fetch data for lat: ${latitude} long: ${longitude}`;
}
