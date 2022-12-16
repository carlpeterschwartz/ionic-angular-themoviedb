//import apiKeyTheMovieDb from 'netlify/functions/themoviedb-netlify'
const apiKeyTheMovieDb = process.env.API_KEY_THEMOVIEDB;

export const environment = {
  production: true,
  apiKey: apiKeyTheMovieDb,  // <-- Enter your own key here!'
  baseUrl: 'https://api.themoviedb.org/3',
  images: 'http://image.tmdb.org/t/p',
};
