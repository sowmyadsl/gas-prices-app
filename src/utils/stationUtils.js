export const generateGasPrice = threshold => {
    let price = threshold;
    for (let i = 0; i <= 10; i++) {
      if (price >= threshold) {
        price = Math.random() * 10;
      }
    }
    return price <= threshold ? price : 0;
  };

export const getCheapestStation = stations => {
  return stations.reduce((min,s) => min.price < s.price ? min : s);
};

export const getClosestStation = stations => {
  return stations.reduce((min,s) => min.distance < s.distance ? min : s);
}

export default generateGasPrice;