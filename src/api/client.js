import axios from "axios";

// https://rmovie.onrender.com/api

const baseurl = "https://rmovie.onrender.com/api"

const client = axios.create({ baseURL: baseurl});

export default client;
