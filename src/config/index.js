const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://madnanrizqullah-face-detector.herokuapp.com/api/v1/'
    : 'http://localhost:3001/api/v1/'

console.log("API_BASE_URL", API_BASE_URL);
console.log("process.env.NODE_ENV", process.env.NODE_ENV);

export { API_BASE_URL };