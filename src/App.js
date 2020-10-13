import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';
import usePosition from './hooks/usePosition';
import CardList from './Components/CardList';
import Loading from './Components/Loading';
import Error from './Components/Error';
import AppHeader from './Components/AppHeader';
import { setLocation } from './state/actions';
import Footer from './Components/Footer';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => (props.dataExists ? '32vh' : '12vh')};
`;
const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 81vh;
`;

/**
 * App Component
 * @param {object} props - Component props
 * @returns {JSX} react component
 */
const App = (props) => {
  const {
    zipcode,
    stations,
    loading,
    error,
    dispatch,
    getStations,
  } = props;
  const { latitude, longitude } = usePosition();

  useEffect(() => {
    if (zipcode) {
      dispatch(setLocation({ latitude: '', longitude: '', zipcode }));
    } else if (latitude && longitude) {
      dispatch(setLocation({ latitude, longitude, zipcode: '' }));
    }
    if ((latitude && longitude) || zipcode) {
      getStations(latitude, longitude, zipcode);
    }
  }, [latitude, longitude, zipcode, dispatch, getStations]);

  // Handles Empty state 
  let displayList = null;
  const emptyList = (
    <EmptyList>
      <FaExclamationTriangle />
      <span>
        No Gas, buddy!
      </span>
    </EmptyList>
  );

  // Handles londing state
  if (!loading) {
    if (stations && stations.length) {
      displayList = <CardList stations={stations} />;
    } else {
      displayList = emptyList;
    }
  }

  return (
    <div className="app-layout">
      <AppHeader className="app-header" stations={stations} dispatch={dispatch} zipcode={zipcode} />
      {error ? <Error error={error} /> : (
        <Body dataExists={stations.length > 0}>
          {loading && <Loading loading={loading} />}
          {displayList}
        </Body>
      )}
      <Footer />
    </div>
  );
};

App.propTypes = {
  zipcode: PropTypes.string,
  stations: PropTypes.arrayOf(
    PropTypes.shape({
      station_name: PropTypes.string.isRequired,
      street_address: PropTypes.string.isRequired,
      distance: PropTypes.number.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  getStations: PropTypes.func.isRequired,
};

App.defaultProps = {
  zipcode: '',
  error: '',
};

export default App;
