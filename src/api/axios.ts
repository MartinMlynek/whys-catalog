import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

if (import.meta.env.DEV) {
  api.interceptors.request.use((config) => {
    console.group(
      `🔹 Request: ${config.method?.toUpperCase() ?? "UNKNOWN"} ${config.url ?? "UNKNOWN URL"}`,
    );
    console.log("Headers:", config.headers);
    if (config.params) console.log("Params:", config.params);
    if (config.data) console.log("Body:", config.data);
    console.groupEnd();

    return config;
  });

  api.interceptors.response.use(
    (response) => {
      console.group(
        `✅ Response: ${response.status.toString()} ${response.config.url ?? "UNKNOWN URL"}`,
      );
      console.log("Data:", response.data);
      console.groupEnd();

      return response;
    },
    (error) => {
      if (axios.isAxiosError(error)) {
        console.group(
          `❌ Axios error: ${error.response?.status.toString() ?? "UNKNOWN"} ${error.config?.url ?? "UNKNOWN URL"}`,
        );
        console.log("Data:", error.response?.data ?? "Unknown data");
        console.groupEnd();

        return Promise.reject(error);
      } else {
        console.group("❌ Unknown error during request");
        console.log("Detail:", error ?? "No error info");
        console.groupEnd();

        return Promise.reject(new Error("Unknown axios error"));
      }
    },
  );
}

export default api;
