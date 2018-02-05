import { Component, ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {  } from '@angular/core/src/linker/element_ref';

/**
 * Generated class for the VelibMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;  //  Pour eviter que l'ide ne râle.....
@IonicPage()
@Component({
  selector: 'page-velib-map',
  templateUrl: 'velib-map.html',
})
export class VelibMapPage {
  @ViewChild('map') mapContainer:ElementRef;
  private station;
  private map;

 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.station = navParams.get('station');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VelibMapPage');
    this.showMap();
  }
  showMap(){
let mapCenter= new google.maps.LatLng(this.station.fields.lat,this.station.fields.lon);
let mapOptions={
  center:mapCenter,
  zoom:15
};
this.map = new google.maps.Map(this.mapContainer.nativeElement,mapOptions);
  }

}
