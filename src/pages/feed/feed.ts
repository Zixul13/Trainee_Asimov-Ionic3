import { MovieProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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

  public objetofeed={
    titulo:"Luiz F. Kikuchi",
    data: "July 15, 2000",
    descricao: "Este é o app do Japa XD. Japa está desenvolvendo este app e chorando com a faculdade",
    likes: 12,
    comments: 4,
    time_comment: "11h ago"
  }

  public Username:string = "Luiz Fernando Kikuchi"

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usemovieprovider: MovieProvider) {
  }

  public SomaDoisNumeros(num1:number,num2:number):void{
    //alert(num1 + num2)
  }

  ionViewDidLoad() {
    this.usemovieprovider.GetLatestMovies().subscribe(
      data=>{
        console.log(data);
        },
      error=>{ console.log (error);
      }
     )
  }

}
