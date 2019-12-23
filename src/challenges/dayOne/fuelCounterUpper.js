
const fuelRequired = (m) => Math.floor(m / 3) - 2;

const fuelCounterUpper = (massArray) => {
  let result = 0;
  massArray.forEach((mass) => {
    result += fuelRequired(mass);
  });
  return result;
};

module.exports = fuelCounterUpper;
