const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://face-detector-api-production.up.railway.app/api/v1/"
    : "http://localhost:3001/api/v1/";

export { API_BASE_URL };