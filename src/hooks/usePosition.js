import { useState, useEffect } from 'react';

/**
 * @returns position
 * */
function usePosition() {
  const [position, setPosition] = useState({});
  const defaultOptions = {
    enableHighAccuracy: true,
    timeout: Infinity,
    maximumAge: 0,
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
      defaultOptions,
    );
  }, [defaultOptions]);
  return position;
}

export default usePosition;
