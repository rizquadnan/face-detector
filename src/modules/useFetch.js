import { API_BASE_URL } from "../config";

function useFetch() {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  return (url, { headers, ...restOfOptions }) => {
    return fetch(`${API_BASE_URL}${url}`, {
      headers: headers
        ? {
            ...defaultHeaders,
            ...headers,
          }
        : defaultHeaders,
      ...restOfOptions,
    })
  }
}

export { useFetch }
