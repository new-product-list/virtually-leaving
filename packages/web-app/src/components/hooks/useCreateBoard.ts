import useFetch from "use-http";

export const useCreateBoard = (url: string) => {
  const { post } = useFetch(url);
  return { post };
};
