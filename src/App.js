import React, { useEffect } from "react";
import styled from "styled-components";
import usePosition from "./hooks/usePosition";
import CardList from "./Components/CardList";
import Loading from "./Components/Loading";
import Error from "./Components/Error";
import AppHeader from "./Components/AppHeader";
import { setLocation } from './state/actions';
import Footer from "./Components/Footer";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.dataExists ? "32vh" : "12vh"};
`;

/**
 * App Component
 * @param {object} props - Component props
 * @returns {JSX} react component
 */
const App = props => {
  const {
    zipcode,
    stations,
    loading,
    error,
    dispatch,
    getStations
  } = props;
  const { latitude, longitude } = usePosition();

  useEffect(() => {
    zipcode ? dispatch(setLocation({ zipcode })) : dispatch(setLocation({ latitude, longitude }));
    getStations(latitude, longitude, zipcode);
  }, [latitude, longitude, zipcode, dispatch, getStations]);

  return (
    <div className="app-layout">
      <AppHeader className="app-header" stations={stations} dispatch={dispatch} zipcode={zipcode} />
      {error ? <Error error={error} /> : (
        <Body dataExists={stations.length > 0}>
          {loading && <Loading loading={loading} />}
          {stations && stations.length ? (
            <CardList stations={stations} />
          ) : null}
        </Body>
      )}
      <Footer />
    </div>
  );
};

export default App;
