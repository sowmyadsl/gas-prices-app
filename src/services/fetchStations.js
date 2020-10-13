const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://developer.nrel.gov/api/alt-fuel-stations/";
const apikey = "DX3mMU31V9LAvG1pdIyHwE4BXJnbUJnyjVkUQ1UC";

export const getUrl = (latitude, longitude, zipcode) => {
  if (zipcode) {
    return `${PROXY_URL}${BASE_URL}v1/nearest.json?location=${zipcode}&api_key=${apikey}&limit=100`;
  }
  return `${PROXY_URL}${BASE_URL}v1/nearest.json?latitude=${latitude}&longitude=${longitude}&api_key=${apikey}&limit=100`;
};

export const fetchStations = async (latitude, longitude, zipcode) => {
  const response = await fetch(getUrl(latitude, longitude, zipcode));
  if (response.ok) {
    const getStationsResponse = response.json();
    return getStationsResponse;
  } 
  return response.text().then(text => {throw Error(text)});
};