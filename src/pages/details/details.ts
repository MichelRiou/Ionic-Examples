import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
//decorateur
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  nomF: any;
  prenomF: any;
  public animal;
  public inputText: string;
  public formul = {
    nom : '',
    prenom : ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.animal = navParams.get('data');
  }
  ionViewWillLeave() {
    let data = {
      nom: this.nomF,
      prenom : this.prenomF
    }
    this.events.publish('event.data', JSON.stringify(data));
  }
}
