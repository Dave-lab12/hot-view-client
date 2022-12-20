import axios from "axios";

const BASE_URL = "http://localhost:3000/articles";

export const articleApi = axios.create({
  baseURL: BASE_URL,
});

export const getArticles = async () => {
  const response = await articleApi.get("/");
  return response;
};

export const getArticle = async (id: string) => {
  const response = await articleApi.get(`/${id}`);
  return response;
};
