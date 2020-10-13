/**
 * generateGasPrice function to randomly generate prices to the API
 * @param {number} threshold threshold value for price
 * @returns {number} random number
 */
export const generateGasPrice = (threshold) => (threshold + Math.random());

/**
 * getCheapestStation function 
 * @param {array} stations 
 * @returns {object} station with cheapest gas price
 */
export const getCheapestStation = (stations) => stations.reduce(
  (min, s) => (min.price < s.price ? min : s),
);

/**
 * getClosest function 
 * @param {array} stations 
 * @returns {object} station with closest gas price using distance
 */
export const getClosestStation = (stations) => stations.reduce(
  (min, s) => (min.distance < s.distance ? min : s),
);

/**
 * generateErrorMsg function 
 * @param {string} latitude 
 * @param {string} longitude
 * @param {string} zipcode
 * @returns {string} error message accordingly
 */
export const generateErrorMsg = (latitude, longitude, zipcode) => {
  if (zipcode) return `Unable to fetch data for zip: ${zipcode}`;
  return `Unable to fetch data for lat: ${latitude} long: ${longitude}`;
};
