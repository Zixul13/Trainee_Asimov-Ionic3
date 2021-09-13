import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public objetofeed={
    titulo:"Luiz F. Kikuchi",
    data: "July 15, 2000",
    descricao: "Este é  app do Japa XD. Japa está desenvolvendo este app e chorando com a faculdade. Trago aqui uma recomendação sobre o filme 'O Poço'. Este filme traz uma história sobre uma prisão com uma sistemática peculiar. Uma única plataforma com comida desce entre os andares e permanecem por um pequeno período. Os detentos dos andares mais baixo comem as sobras. Um homem decide mudar esse sistema. Este filme gera uma grande reflexão social com o mundo atual e reflexões de escopo aberto. Super recomendo para quem gosta de um certo suspense. Espero que gostem!!! ",
    likes: 420,
    comments: 80,
    time_comment: "11h ago"
  }

  constructor(public navCtrl: NavController) {

  }

}
