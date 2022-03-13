import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const client = axios.create({ baseURL });

export const getExchanges = page => client.get(`/exchanges?per_page=10&page=${page}`);

export const getExchange = id => client.get(`/exchanges/${id}`);
