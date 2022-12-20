import axios from "axios";
import { BASE_URL } from "config/default";

export const articleApi = axios.create({
  baseURL: BASE_URL,
});

export const getArticles = async () => {
  const response = await articleApi.get("/articles/");
  return response;
};

export const getArticle = async (id: string) => {
  const response = await articleApi.get(`/articles/${id}`);
  return response;
};
