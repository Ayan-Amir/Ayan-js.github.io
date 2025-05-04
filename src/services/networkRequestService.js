import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  performDeleteRequest,
  performGetRequest,
  performPatchRequest,
  performPostRequest,
  performPutRequest,
} from './apiClient';

export const useGetQuery = ({ key, url, params = {}, options }) => {
  const requestOptions = options ? options : { refetchOnWindowFocus: false, retry: false };
  return useQuery({
    queryKey: [key, params],
    queryFn: () => {
      return performGetRequest({ url, params });
    },
    ...requestOptions,
  });
};

export const useGetInfiniteQuery = ({ key, url, params = {}, getNextPageParam, options }) => {
  const requestOptions = options ? options : { refetchOnWindowFocus: false, retry: false };

  return useInfiniteQuery({
    queryKey: [key, params],
    queryFn: ({ pageParam = 1 }) => performGetRequest({ url, params: { ...params, page: pageParam } }),
    getNextPageParam,
    ...requestOptions,
  });
};

export const usePostMutation = ({ url, onSuccess, onError }) => {
  return useMutation({
    mutationFn: ({ payload, params }) => {
      return performPostRequest({ url, payload, params });
    },
    onSuccess,
    onError,
  });
};

export const useUpdateMutation = ({ url, onSuccess, onError, key }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ payload, params }) => {
      return performPatchRequest({ url, payload, params });
    },
    onSuccess,
    onError,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: key });
    },
  });
};

export const usePutMutation = ({ url, onSuccess, onError }) => {
  return useMutation({
    mutationFn: ({ payload, params }) => {
      return performPutRequest({ url, payload, params });
    },
    onSuccess,
    onError,
  });
};

export const useDeleteMutation = ({ url, onSuccess, onError }) => {
  return useMutation({
    mutationFn: () => {
      return performDeleteRequest({ url });
    },
    onSuccess,
    onError,
  });
};
