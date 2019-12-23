require('dotenv').config();
const express = require('express');

const app = express();
const { fuelCounterUpper } = require('./challenges');

app.get('/', (req, res) => {
  res.status(200).send(`Answer: ${fuelCounterUpper(12)}`);
});

app.listen(process.env.PORT, () => {
  console.log(fuelCounterUpper(12));
  console.log(`Server running at http://localhost:/${process.env.PORT}/`);
});
