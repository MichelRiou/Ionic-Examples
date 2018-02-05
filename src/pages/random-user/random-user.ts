import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { leave } from '@angular/core/src/profile/wtf_impl';

/**
 * Generated class for the RandomUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-random-user',
  templateUrl: 'random-user.html',
})
export class RandomUserPage {
  selectedFilterCountry: any='fr';
  private url: string = "https://randomuser.me/api";
  private newUrl;
  public user = {
    name: '',
    image: null
  };
  public userList = [];
  public userSelectedIndex;
  selectedFilterGender;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    this.http.get(this.url).subscribe(
      (response) => {
        console.table(response);
        console.table(response.json());
        let data = response.json().results[0]; // Cela dépend de l'api utilisée  ici tab result de tab
        this.user.name = data.name.title + ' ' + data.name.first + ' ' + data.name.last;
        this.user.image = data.picture.large;
      }
    );
    this.loadUsers();
  }
  loadUsers() {
   this.modifyUrl();
    this.http.get(this.newUrl).subscribe(
      (response) => {
        this.userList = response.json().results;
      }
    );
  }
  loadMore(infiniteScroll) {
    this.modifyUrl();
    this.http.get(this.newUrl).subscribe(
      (response) => {
        this.userList = this.userList.concat(response.json().results);
        infiniteScroll.complete();
      }
    );
  }
  refreshUsers(refresher) {
    this.modifyUrl();
    this.http.get(this.newUrl).subscribe(
      (response) => {
        this.userList = response.json().results.concat(this.userList);
        refresher.complete();
      }
    );
  }
  displayUserInfo(pos) {
    this.userSelectedIndex = pos;

  }
  changeGender() {
    this.modifyUrl();
    console.log(this.newUrl);
    this.loadUsers();



 
  }
  modifyUrl() {
    if (this.selectedFilterGender != null) { this.newUrl = this.url + '?gender=' + this.selectedFilterGender + '&results=10' } else {
      this.newUrl = this.url + '?results=10'
    };
    if (this.selectedFilterCountry != null) {
       this.newUrl = this.newUrl + '&nat=' + this.selectedFilterCountry}
    };


}
