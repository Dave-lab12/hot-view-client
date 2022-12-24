import { useQuery } from "react-query";

import { getArticles, getArticle } from "../utils/articlesApi";

interface IParams {
  id: string;
}

export function useArticles() {
  const query = useQuery("Fetch Articles", getArticles);
  return query;
}

export function useArticle({ id }: IParams) {
  const query = useQuery("Fetch Articles", () => getArticle(id));
  return query;
}
