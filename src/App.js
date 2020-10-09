import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import usePosition from "./hooks/usePosition";
import fetchStations from "./services/fetchStations";
import CardList from "./Components/CardList";
import Loading from "./Components/Loading";
import AppHeader from './Components/AppHeader';
import generateGasPrice from "./utils/stationUtils";
import "./App.css";


const Body = styled.div`
`;

function App() {
  const [stations, setStations] = useState([]);
  const { latitude, longitude } = usePosition();

  useEffect(() => {
    fetchData();
  }, [latitude, longitude]);

  const fetchData = async () => {
    if (!latitude || !longitude) return;
    const data = await fetchStations(latitude, longitude);
    const filteredStations = data.fuel_stations.filter(
      station => station.access_code.toLowerCase() === "public"
    );
    const withPrice = filteredStations.map(station => {
      return {...station, price: generateGasPrice(3)}
    });
    setStations(withPrice);
  };

  return (
    <div className="app-layout">
      <AppHeader className="app-header" text={"Gas Prices App"} />
      <Body>
        {stations && stations.length ? (
          <CardList stations={stations} />
        ) : (
            <Loading loading={true} />
          )}
      </Body>
    </div>
  );
}

export default App;
