import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from './../../model/task.model';
import { TaskListService } from '../../services/task-list.service';
import { MessageService } from '../../services/messages.service';

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {
  task: Task = {
    name: '',
    description: '',
    date: undefined,
    time: undefined,
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private taskList: TaskListService,
    private message: MessageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }

  addTask(task: Task){
    this.taskList.addTask(task).then(ref => {
      this.message.show(`${task.name} added!`);
      this.navCtrl.setRoot('HomePage', { key: ref.key});
    });
  }
}
