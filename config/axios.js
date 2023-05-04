const axios = require("axios");

const instance = axios.create({
  baseURL: "http://localhost:4002/api/v1",
});

instance.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY4MzE2NTY3MCwiZXhwIjoxNjgzMTc2NDcwfQ.wI2i-NnzbLIGnXN_tepCMIcvQYg-79RTTlOU5sCK0OU";

module.exports = instance;
