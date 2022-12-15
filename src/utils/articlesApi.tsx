import axios from "axios";

import { IArticle } from "../types/Article";

const BASE_URL = "http://localhosst:8001/";

export const articleApi = axios.create({
  baseURL: BASE_URL,
});

export const articles = async () => {
  const response = await articleApi.get("/");
  return response;
};

export const article = async (id: string) => {
  const response = await articleApi.get(`/:${id}`);
  return response;
};
