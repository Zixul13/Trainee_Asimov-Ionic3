import { MovieProvider } from '../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
  providers: [MovieProvider]
})
export class MovieDetailsPage {

  public filme
  public movie_id

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usemovieprovider: MovieProvider
    ) {
  }

  ionViewDidEnter() {

    this.movie_id = this.navParams.get("id")

    console.log ("ID do Filme: ", this.movie_id)

    if(this.movie_id){

      this.usemovieprovider.GetMovieDetail(this.movie_id).subscribe(

        data=>{
            console.log(data)
          },
        error=>{

        }
       )
    }

  }

}
