const axios = require("axios");

const auth = process.env.NEXT_PUBLIC_AUTH;
const instance = axios.create({
  baseURL: "http://localhost:4002/api/v1",
});

instance.defaults.headers.common["Authorization"] = `Bearer ${auth}`;

module.exports = instance;
