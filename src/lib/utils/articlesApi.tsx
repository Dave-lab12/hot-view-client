import axios from "axios";
import { BASE_URL } from "config/default";

import { IArticle } from "../types/Article";

export const articleApi = axios.create({
  baseURL: `${BASE_URL}/articles`,
});

export const createArticle = async (article: IArticle) => {
  const response = await articleApi.post("/", { ...article });
  return response;
};

export const getArticles = async () => {
  const response = await articleApi.get("/");
  return response;
};

export const getArticle = async (id: string) => {
  const response = await articleApi.get(`/${id}`);
  return response;
};

export const updateArticle = async (article: IArticle) => {
  const response = await articleApi.post(`/${article.id}`, { ...article });
  return response;
};

export const deleteArticle = async (id: string) => {
  const response = await articleApi.delete(`/${id}`);
  return response;
};
