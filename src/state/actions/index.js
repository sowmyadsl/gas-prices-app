export const SET_LOCATION = "SET_LOCATION";
export const GET_STATIONS_PENDING = "GET_STATIONS_PENDING";
export const GET_STATIONS_SUCCESS = "GET_STATIONS_SUCCESS";
export const GET_STATIONS_FAILURE = "GET_STATIONS_FAILURE";

export const setLocation = payload => ({
  type: SET_LOCATION,
  ...payload
});

export const getStationsPending = () => ({
  type: GET_STATIONS_PENDING
});

export const getStationsSuccess = payload => ({
  type: GET_STATIONS_SUCCESS,
  stations: payload
});

export const getStationsFailure = payload => ({
  type: GET_STATIONS_FAILURE,
  error: payload
});
