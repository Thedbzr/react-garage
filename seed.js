require('dotenv').config();
require('./config/database');

const Car = require('./models/car');

(async function () {
    const carOne = await Car.create({
        year: 2020,
        make: 'Toyota',
        model: 'Supra',
        color: 'Red'
    })

    console.log(carOne);
    process.exit();

})();