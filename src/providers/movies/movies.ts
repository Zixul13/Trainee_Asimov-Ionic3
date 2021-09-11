import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

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

  GetLatestMovies (){

    return this.http.get(this.BaseApiPath + "/movie/latest")

  }

}
