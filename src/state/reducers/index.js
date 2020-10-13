import {
  SET_LOCATION,
  GET_STATIONS_PENDING,
  GET_STATIONS_SUCCESS,
  GET_STATIONS_FAILURE
} from "../actions";

const initialState = {
  latitude: "",
  longitude: "",
  zipcode: "",
  stations: [],
  loading: true,
  error: ""
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...initialState,
        latitude: action.latitude,
        longitude: action.longitude,
        zipcode: action.zipcode
      };
    case GET_STATIONS_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_STATIONS_SUCCESS:
      return {
        ...state,
        stations: action.stations,
        loading: false
      };
    case GET_STATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        stations: [],
        error: action.error
      };
    default:
      return state;
  }
};

export default rootReducer;
