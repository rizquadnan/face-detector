const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://madnanrizqullah-face-detector.herokuapp.com/api/v1/'
    : 'http://localhost:3001/api/v1/'

export { API_BASE_URL };