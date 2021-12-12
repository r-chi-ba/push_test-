import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {

  constructor() {
    this.task = {title: '', done: false, deadline: undefined}
  }

  @Input() task: Task;

  ngOnInit(): void {

  }

  isOverdue(task: Task) {
    const date = new Date();
   date.setHours(0, 0, 0, 0);
   if ( task.deadline != undefined ) {
    return !task.done && task.deadline < date;
  }
else {
  console.error('deadlineがない')
  return false;
}
}
}
