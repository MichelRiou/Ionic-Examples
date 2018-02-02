import { Component } from '@angular/core';
import { FormPage } from '../form/form';
import { NavController, AlertController } from 'ionic-angular';
import { TodoProvider } from './../../providers/todo/todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pos: any;

  public todoList;


  public filterList: string[] = ['Toutes', 'En cours', 'Terminées'];

  public selectedFilter: string = 'Toutes';

  constructor(public navCtrl: NavController, public todoProvider: TodoProvider, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    //this.todoList = this.todoProvider.getAll();
    this.filterTodo();
  }

  ionViewWillEnter() {
    this.selectedFilter = 'Toutes';
    this.filterTodo();
  }

  filterTodo() {
    let selectedItem = this.selectedFilter.trim();
    if (selectedItem == 'En cours') {
      this.todoList = this.todoProvider.getNotDone();
    } else if (selectedItem == 'Terminées') {
      this.todoList = this.todoProvider.getDone();
    } else {
      this.todoProvider.getAll().then(
        (data) => {
          this.todoList = data;
          console.log("filter "+ this.todoList);
        }
      );
    }
  }

  delete(pos) {
    let alertOptions = {
      title: 'Voulez vous confirmer?',
      buttons: [
        { text: 'OUI', handler: () => { this.todoProvider.delete(pos); } },
        { text: 'NON', role: 'cancel' }
      ]
    };
    this.alertCtrl.create(alertOptions).present();

  }

  edit(todo) {
    this.navCtrl.push(FormPage, { todo: todo });
  }

  add() {
    this.navCtrl.push(FormPage);
  }

  changeDone(todo) {
    todo.done = !todo.done;
    this.todoProvider.edit(todo);
    if (this.selectedFilter != "Toutes") {
      this.filterTodo();
    }

  }

}
