// lib/axios.ts
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { toast } from "react-toastify";

// export const dynamic = "force-dynamic";
export default class AxiosConfig {
  public api: AxiosInstance;
  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.requestInterceptorSetup();
    this.responseInterceptorSetup();
  }

  // Request Interceptor: Add Authorization token if available
  requestInterceptorSetup = () => {
    this.api.interceptors.request.use(
      (config) => {
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : null;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        console.error("Request setup error.");
        return Promise.reject(error);
      }
    );
  };

  // Response Interceptor: Global error handling
  responseInterceptorSetup = () => {
    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        const { method, url } = response.config;
        const successMessageFromBackend = (response.data as any)?.message;

        const isMutation = ["POST", "PUT", "PATCH", "DELETE"].includes(
          method?.toUpperCase() || ""
        );

        if (isMutation && url) {
          // ✅ Extract the entity = first word after '/api/'
          const match = url.match(/\/api\/([^\/\?]+)/);
          let entity = match?.[1] || "Entity";

          // Capitalize and singularize
          entity =
            entity.charAt(0).toUpperCase() + entity.slice(1).replace(/s$/, "");

          const actionMap: Record<string, string> = {
            POST: "created",
            PUT: "updated",
            PATCH: "updated",
            DELETE: "deleted",
          };
          const action = actionMap[method?.toUpperCase() || ""] || "processed";

          const finalMessage =
            successMessageFromBackend || `${entity} ${action} successfully.`;

          toast.success(finalMessage);
        }

        return response;
      },
      (error: AxiosError) => {
        const res = error.response;
        const message =
          (res?.data as any)?.message || "An unexpected error occurred.";

        if (res) {
          console.log("API Error:");
        } else if (error.request) {
          console.error(
            "No response from server. Check your internet connection."
          );
        } else {
          console.error(`Error: ${error.message}`);
        }

        return Promise.reject(error);
      }
    );
  };
}
