"use client";
const axios = require("axios");
const { getAuthTokenClient } = require("./cookie");

const auth = JSON.parse(localStorage.getItem("token"));
const url = process.env.NEXT_PUBLIC_URL;
const instance = axios.create({
  baseURL: url,
});

instance.defaults.headers.common["Authorization"] = "Bearer " + auth;
instance.defaults.maxContentLength = 10000000;

module.exports = { instance };
