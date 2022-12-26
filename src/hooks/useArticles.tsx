import { useQuery, useMutation, UseQueryOptions } from "react-query";

import {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
} from "../utils/articlesApi";
import { IArticle } from "../types/Article";

interface IParams {
  id: string;
}

const queryOptions = {
  staleTime: 1000,
  refetchOnMount: true,
  refetchIntervalInBackground: true,
};

export function useGetArticles() {
  const query = useQuery("Fetch Articles", getArticles, queryOptions);
  return query;
}

export function useGetArticle({ id }: IParams) {
  const query = useQuery(
    `Fetch Article ${id}`,
    () => getArticle(id),
    queryOptions
  );
  return query;
}

export function useCreateArticle() {
  const mutation = useMutation((article: IArticle) => createArticle(article));
  return mutation;
}

export function useUpdateArticle() {
  const mutation = useMutation((article: IArticle) => updateArticle(article));
  return mutation;
}
