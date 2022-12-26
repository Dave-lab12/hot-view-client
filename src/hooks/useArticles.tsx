import { useQuery, useMutation, UseQueryOptions } from "react-query";

import { getArticles, getArticle } from "../utils/articlesApi";

interface IParams {
  id: string;
}

const queryOptions: UseQueryOptions = {
  staleTime: 1000,
  refetchOnMount: true,
  refetchIntervalInBackground: true,
};

export function useQueryArticles() {
  const query = useQuery("Fetch Articles", getArticles, { ...queryOptions });
  return query;
}

export function useQueryArticle({ id }: IParams) {
  const query = useQuery("Fetch Articles", () => getArticle(id), {
    ...queryOptions,
  });
  return query;
}

export function useMutationArticle() {
  const mutation = useMutation();
}
