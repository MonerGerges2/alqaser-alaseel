import showNotification from "@/utils/notify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type UseMutateProps<T> = {
  method?: "post" | "put" | "delete";
  endpoint: string;
  language?: string;
  formData?: boolean;
  mutationKey: any[];
  onSuccess?: (data: T) => void;
  onError?: (err: any) => void;
  queryKeyToInvalidate?: readonly unknown[];
  onUploadProgress?: (progress: number) => void;
};

function useMutate<T>({
  method,
  endpoint,
  mutationKey,
  formData = false,
  onSuccess,
  onError,
  queryKeyToInvalidate,
  onUploadProgress,
}: UseMutateProps<T>) {
  const queryClient = useQueryClient();
  const { data, isSuccess, mutate, failureReason, isError, error, isLoading } =
    useMutation({
      mutationKey,
      mutationFn: async (data: T) => {
        const response = await axios({
          method: method || "post",
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`,
          data,
          headers: formData
            ? {
                "Content-Type": "multipart/form-data",
              }
            : {
                "Content-Type": "application/json; charset=utf-8",
              },
          onUploadProgress: (progressEvent) => {
            if (onUploadProgress && progressEvent.total) {
              const progress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              onUploadProgress(progress);
            }
          },
        });
        return response.data;
      },
      onError: (error: any) => {
        const errorMessage =
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          error.message;

        console.log(error);

        showNotification(errorMessage, "error");

        if (onError) {
          onError(error);
        }
      },
      onSuccess: (data) => {
        if (queryKeyToInvalidate) {
          queryClient.invalidateQueries(queryKeyToInvalidate);
        }
        if (onSuccess) {
          onSuccess(data);
        }
      },
    });

  return {
    data,
    isLoading,
    isSuccess,
    mutate,
    failureReason,
    isError,
    error,
  };
}

export default useMutate;
