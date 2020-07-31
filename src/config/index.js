const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'https://localhost:8080'
  : 'https://fragaflix.herokuapp.com';

export default {
  URL_BACKEND,
};
