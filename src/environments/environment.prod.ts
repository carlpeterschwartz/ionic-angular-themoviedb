//import API_KEY_THEMOVIEDB from 'netlify/functions/'
let apiKeyTheMovieDb = process.env['API_KEY_THEMOVIEDB'];

export const environment = {
  production: true,
  apiKey: apiKeyTheMovieDb,  // <-- Enter your own key here!'
  baseUrl: 'https://api.themoviedb.org/3',
  images: 'http://image.tmdb.org/t/p',
};
