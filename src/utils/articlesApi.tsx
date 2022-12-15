import axios from "axios";

const BASE_URL = "http://localhosst:8001/";

export const articleApi = axios.create({
  baseURL: BASE_URL,
});

export const getArticles = async () => {
  const response = await articleApi.get("/");
  return response;
};

export const getArticle = async (id: string) => {
  const response = await articleApi.get(`/:${id}`);
  return response;
};
