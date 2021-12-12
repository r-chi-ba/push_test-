import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor() { }

  @Output() addTask = new EventEmitter<Task>();

  newTask: {title: string, deadline: Date, done: boolean} = {
    title: '',
    deadline: new Date(),
    done: false,

  };

  ngOnInit(): void {
  }

  submit(): void {
    this.addTask.emit({title: this.newTask.title, deadline: this.newTask.deadline, done: this.newTask.done});
    this.newTask = {
      title: '',
      deadline: new Date(),
      done: false,
    };
  }


}
