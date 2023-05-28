"use client";
const axios = require("axios");
const { getAuthTokenClient } = require("./cookie");

const auth = getAuthTokenClient();

const instance = axios.create({
  baseURL: "http://localhost:4002/api/v1",
});

instance.defaults.headers.common["Authorization"] = "Bearer " + auth;

module.exports = { instance };
