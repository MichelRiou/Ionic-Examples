import { Component } from '@angular/core';
import { NavController,ToastController, Events } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { leave } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  animals = [
    {
      'title': 'Vache',
      'image': 'imgs/animals/cow-icon.png',
      'desc': 'Meugle',
      'file': '/sounds/cow.mp3',
      'playing': false
    },
    {
      'title': 'Dauphin',
      'image': 'imgs/animals/dolphin-icon.png',
      'desc': 'Siffle',
      'file': '/sounds/dolphin.mp3',
      'playing': false
    },
    {
      'title': 'Grenouille',
      'image': 'imgs/animals/frog-icon.png',
      'desc': 'Coasse',
      'file': '/sounds/frog.mp3',
      'playing': false
    },
    {
      'title': 'Oiseau',
      'image': 'imgs/animals/bird-icon.png',
      'desc': 'Chante',
      'file': '/sounds/bird.mp3',
      'playing': false
    },
    {
      'title': 'Cochon',
      'image': 'imgs/animals/pig-icon.png',
      'desc': 'Grogne',
      'file': '/sounds/pig.mp3',
      'playing': false
    },
    {
      'title': 'Chien',
      'image': 'imgs/animals/puppy-icon.png',
      'desc': 'Aboie',
      'file': '/sounds/dog.mp3',
      'playing': false
    },
    {
      'title': 'Chat',
      'image': 'imgs/animals/black-cat-icon.png',
      'desc': 'Miaule',
      'file': '/sounds/cat.mp3',
      'playing': false
    },
    {
      'title': 'Cheval',
      'image': 'imgs/animals/horse-icon.png',
      'desc': 'Hennit',
      'file': '/sounds/horse.wav',
      'playing': false
    },
    {
      'title': 'Ane',
      'image': 'imgs/animals/donkey-icon.png',
      'desc': 'Brait',
      'file': '/sounds/donkey.wav',
      'playing': false
    }
  ];
  private currentAnimal;
  public result: string;
  public showReorder=false;
  //data = [];
  constructor(public navCtrl: NavController, public toastCtrl:ToastController,public events:Events) {
    // L'abonnement pourrait avoir lieu ici plutot que lors du cycle de vie ionViewDidLoad
   }
   ionViewDidLoad(){
    this.events.subscribe('event.data', (data)=>{
      let test =JSON.parse(data);
      this.toastCtrl.create({
        message:test.nom,
        duration:2000,
        position:'top'
      }).present();  
    });
    
    }
  /**
   * Choix aléatoire d'un animal
   */
  pickAnimal() {
    let pos;
    let animal;
    if (!this.currentAnimal) {
      pos = Math.floor(Math.random() * this.animals.length);
      animal=this.animals[pos];
    } else {
      animal = this.currentAnimal;
    }

    return animal;
  }
  playSound() {
    this.result = "";
    // Choix d'un animal
    console.log("click");
    this.currentAnimal = this.pickAnimal();
    //let choosenAnimal = this.animals[this.currentAnimal];
    // Chargement du son
    let audio = new Audio();
    audio.src = 'assets' + this.currentAnimal.file;
   // console.log("choosenanimal" + choosenAnimal.file);
    audio.load();
    audio.play();
  }
  /**
   * 
   * @param pos Postion dans Animals
   */
  guess(animalName) {
    //console.log("guess"+animalName);
    //console.log("current"+this.currentAnimal.title);

    if (this.currentAnimal) {
      if (animalName == this.currentAnimal.title) {
        //this.result = "Gagné";
        this.currentAnimal=null;
        this.toastCtrl.create({
          message:"Gagné",
          duration:1000,
          position:'top'
        }).present();
        //this.currentAnimal = null;
      } else {
        this.toastCtrl.create({
          message:"Essaie encore",
          duration:1000,
          position:'top'
        }).present();
        //this.result = "Essaie encore";
      }
    }
  }
  goToDetails(animal){
    this.navCtrl.push(DetailsPage,{data:animal}); // Doit être déclarée dans app.modules.ts 
  } 
}
