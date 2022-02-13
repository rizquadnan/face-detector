const API_BASE_URL = 'http://localhost:3001/api/v1/'

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
