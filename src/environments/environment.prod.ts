//import apiKeyTheMovieDb from 'netlify/functions/themoviedb-netlify'
//const apiKeyTheMovieDbProd = process.env['API_KEY_THEMOVIEDB'];

export const environment = {
  production: true,
  API_KEY_THEMOVIEDB: 'your_api_key_here',  // <-- Enter your own key here!'
  baseUrl: 'https://api.themoviedb.org/3',
  images: 'http://image.tmdb.org/t/p',
};
