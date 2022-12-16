import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

export interface movie {
  adult: string,
  backdrop_path: string,
  genre_ids: number [],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

@Injectable({
  providedIn: 'root',
})

export class MovieService {
  constructor(private http: HttpClient) {}

  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.BASE_URL}/movie/popular?page=${page}&api_key=${environment.API_KEY_THEMOVIEDB}`
    );
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<ApiResult>(
      `${environment.BASE_URL}/movie/${id}?api_key=${environment.API_KEY_THEMOVIEDB}`
    );
  }
}
