const API_BASE_URL = 'https://madnanrizqullah-face-detector.herokuapp.com/api/v1/'

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
