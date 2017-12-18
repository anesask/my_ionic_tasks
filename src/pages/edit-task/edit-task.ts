import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../model/task.model';
import { TaskListService } from '../../services/task-list.service';
import { MessageService } from '../../services/messages.service';

@IonicPage()
@Component({
  selector: 'page-edit-task',
  templateUrl: 'edit-task.html',
})
export class EditTaskPage {
  task: Task = {
  name:'',
  description: '',
  date: undefined,
  time: undefined,
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private taskList: TaskListService,
    private message: MessageService) {}

  ionViewDidLoad() {
    this.task = this.navParams.get('task');
  }

  saveTask(task: Task){
    this.taskList.editTask(task).then(() =>{
      this.message.show(`${task.name} successfully saved!`);
      this.navCtrl.setRoot('HomePage');
    });
  }

  removeTask(task: Task){
    this.taskList.removeTask(task).then(() => {
      this.message.show(`${task.name} deleted!`);
      this.navCtrl.setRoot('HomePage');
    });
  }
}
