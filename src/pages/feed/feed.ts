import { MovieProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MovieDetailsPage } from '../movie-details/movie-details';



/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [MovieProvider]
})
export class FeedPage {


  public page = 1;
  public infiniteScroll;
  public items;

  public movie_list = new Array<any>();
  public Username:string = "Luiz Fernando Kikuchi"
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public loadingCtrl: LoadingController

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usemovieprovider: MovieProvider
    ) {}


    AbreLoading() {
      this.loader = this.loadingCtrl.create({
        content: "Carregando...",
      });
      this.loader.present();
    }

    FechaLoading(){
      this.loader.dismiss();
    }

    doRefresh(refresher) {
      this.refresher = refresher
      this.isRefreshing = true;

      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;

      this.CarregarFilmes();

      }
    }

  ionViewDidEnter() {

    this.CarregarFilmes();

  }

  OpenDetails(filme){

    console.log (filme);
    this.navCtrl.push(MovieDetailsPage, {id: filme.id})

  }

  doInfinite(infiniteScroll) {

    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.CarregarFilmes(true);

  }

  CarregarFilmes(newpage: boolean = false){


    //this.AbreLoading();
    this.usemovieprovider.GetLatestMovies(this.page).subscribe(

      data=>{
        const response= (data as any);

        if(newpage){
          this.movie_list = this.movie_list.concat(response.results)
          this.infiniteScroll.complete();
        }
        else{
          this.movie_list = response.results
        }

        console.log(this.movie_list)

        //this.FechaLoading();
        },
      error=>{
        console.log (error);
        //this.FechaLoading();
      }
     )

  }

}
