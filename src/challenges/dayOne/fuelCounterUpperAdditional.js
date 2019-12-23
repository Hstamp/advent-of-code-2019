
const calculateFuelRequirement = (mass) => {
  const fuelRequirement = Math.floor(mass / 3) - 2;
  if (fuelRequirement <= 0) {
    return 0;
  }
  return fuelRequirement + calculateFuelRequirement(fuelRequirement);
};

const fuelCounterUpperAdditional = (massArray) => {
  let totalFuel = 0;
  massArray.forEach((mass) => {
    totalFuel += calculateFuelRequirement(mass);
  });
  return totalFuel;
};

module.exports = fuelCounterUpperAdditional;
