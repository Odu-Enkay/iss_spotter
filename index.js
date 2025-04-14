// The code below is temporary and can be commented out.
//const fetchMyIP  = require('./iss');
const {  fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});



fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});