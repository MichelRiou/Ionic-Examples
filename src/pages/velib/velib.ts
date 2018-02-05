import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { VelibMapPage } from '../velib-map/velib-map';

/**
 * Generated class for the VelibPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-velib',
  templateUrl: 'velib.html',
})
export class VelibPage {
private url:string ="https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-emplacement-des-stations&rows=-1";
  public stations;
constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad VelibPage');
    this.http.get(this.url).subscribe(
      (response) => {
      console.log(response);
      //  console.log(response.json());
        this.stations = response.json().records; // Cela dépend de l'api utilisée  ici tab result de tab
        
        console.log(this.stations);
        
        
      }
    );
  }
goToMap(station){
this.navCtrl.push(VelibMapPage,{station:station});
}
}
