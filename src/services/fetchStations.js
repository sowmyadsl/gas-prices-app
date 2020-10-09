const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://developer.nrel.gov/api/alt-fuel-stations/";
const apikey = "DX3mMU31V9LAvG1pdIyHwE4BXJnbUJnyjVkUQ1UC";

const getUrl = (latitude, longitude) => {
  return `${PROXY_URL}${BASE_URL}v1/nearest.json?&latitude=${latitude}&longitude=${longitude}&api_key=${apikey}&limit=100`;
};

const fetchStations = async (latitude, longitude) => {
  const response = await fetch(getUrl(latitude, longitude));
  if (response.ok) {
    const getStationsResponse = response.json();
    return getStationsResponse;
  }
};

export default fetchStations;
