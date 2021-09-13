import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { isJSDocFunctionType } from 'typescript';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private BaseApiPath = "https://api.themoviedb.org/3"

  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }

  GetLatestMovies (page = 1){

    return this.http.get(this.BaseApiPath + `/movie/popular?page=${page}&api_key=343fd8f7c39ce86ab70131ddc14ab901`)

  }

  GetMovieDetail (movie_id){

    return this.http.get(this.BaseApiPath + `/movie/${movie_id}?api_key=343fd8f7c39ce86ab70131ddc14ab901`)

 }

}
