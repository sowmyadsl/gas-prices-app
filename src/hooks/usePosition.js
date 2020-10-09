import { useState, useEffect } from "react";

function usePosition() {
  const [position, setPosition] = useState({});
  const defaultOptions = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };

  useEffect(() => {
    function success(pos) {
      const coord = pos.coords;
      setPosition(coord);
    }

    function error(err) {
      console.log(`ERROR(${err.code}): ${err.message}`);
    }

    return navigator.geolocation.getCurrentPosition(
      success,
      error,
      defaultOptions
    );
  }, []);
  return position;
}

export default usePosition;
