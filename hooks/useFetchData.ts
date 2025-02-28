import axios from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import showNotification from "@/utils/notify";

type UseFetchProps<T> = {
  queryKey: any;
  endpoint: string;
  enabled?: boolean;
  select?: (data: any) => T;
  onError?: (err: any) => void;
  onSuccess?: (data: T) => void;
  language?: boolean;
};

function useFetch<T>({
  queryKey,
  endpoint,
  enabled = true,
  select,
  onError,
  onSuccess,
  language = false,
}: UseFetchProps<T>) {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const config = {
    headers: {
      "Accept-Language": "ar",
    },
  };


  const queryOptions: UseQueryOptions<T, any> = {
    queryKey,
    queryFn: async () => {
      try {
        const response = await axios.get(`${baseURL}/${endpoint}`, config);
        return response.data;
      } catch (err: any) {
        throw err;
      }
    },
    enabled,
    select,
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message || t('error');
      
      showNotification(errorMessage, "error");
      
      if (onError) {
        onError(error);
      }
    },
    onSuccess: (data: any) => {
      if (onSuccess) {
        onSuccess(data);
      }
    },
    retry: 1,
  };

  const query = useQuery<T>(queryOptions);

  return query;
}

export default useFetch;
