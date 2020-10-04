import React, { useState, useEffect } from "react";
import usePosition from "./hooks/usePosition";
import fetchStations from "./services/getStations";
import CardList from "./Components/CardList";
import Loading from "./Components/Loading";
import "./App.css";

function App() {
  const [stations, setStations] = useState([]);
  const { latitude, longitude } = usePosition();

  console.log(latitude, longitude);

  useEffect(() => {
    fetchData();
  }, [latitude, longitude]);

  const fetchData = async () => {
    if (!latitude || !longitude) return;
    const data = await fetchStations(latitude, longitude);
    const filteredStations = data.fuel_stations.filter(
      station => station.access_code.toLowerCase() === "public"
    );
    setStations(filteredStations);
  };

  return (
    <div className="app-layout">
      <h1 className="app-header">Gas Prices App</h1>
      {stations && stations.length ? (
        <CardList stations={stations} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
