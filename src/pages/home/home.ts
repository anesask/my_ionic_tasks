import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
// Service Import
import { TaskListService } from './../../services/task-list.service';
import { Observable } from 'rxjs/Observable';
//
import { Task } from '../../model/task.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  taskList$: Observable<Task[]>;

  constructor(
    public navCtrl: NavController,
    private taskList: TaskListService) {
      this.taskList$ = this.taskList
      .getTaskList() // Database List
      .snapshotChanges() // Key
      .map(
        changes => {
          return changes.map(c => ({  // Return object
            key: c.payload.key, ...c.payload.val()
          }))
        }
      )
     }

}
