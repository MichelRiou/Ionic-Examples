import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  private currentAnimal: string;
  public result: string;
  public showReorder=false;
  constructor(public navCtrl: NavController) { }

  /**
   * Choix aléatoire d'un animal
   */
  pickAnimalName() {
    let animalName;
    if (!this.currentAnimal) {
      animalName = Math.floor(Math.random() * this.animals.length);
    } else {
      animalName = this.currentAnimal;
    }

    return animalName;
  }
  playSound() {
    this.result = "";
    // Choix d'un animal
    console.log("click");
    this.currentAnimal = this.pickAnimalName();
    let choosenAnimal = this.animals[this.currentAnimal];
    // Chargement du son
    let audio = new Audio();
    audio.src = 'assets' + choosenAnimal.file;
    console.log(choosenAnimal.file);
    audio.load();
    audio.play();
  }
  /**
   * 
   * @param pos Postion dans Animals
   */
  guess(animalName) {
    if (this.currentAnimal) {
      if (animalName == this.currentAnimal) {
        this.result = "Gagné";
        this.currentAnimal = null;
      } else {
        this.result = "Essaie encore";
      }
    }
  }
  
}
