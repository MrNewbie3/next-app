"use client";
const axios = require("axios");
const { getAuthTokenClient } = require("./cookie");

const auth = getAuthTokenClient();

const instance = axios.create({
  baseURL: "https://api-stapa-app.vercel.app/api/v1",
});

instance.defaults.headers.common["Authorization"] = "Bearer " + auth;

module.exports = { instance };
