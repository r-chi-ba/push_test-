import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { collection, doc, Firestore, firestoreInstance$, getFirestore, provideFirestore } from '@angular/fire/firestore'
import { addDoc } from '@firebase/firestore';
import { collectionChanges, collectionData } from 'rxfire/firestore';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {




   constructor(
     private firestore: Firestore) {

     }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

tasks: Task[] = [];


  subscription: Subscription = new Subscription;



 ngOnInit(): void {
  const ref = collection(this.firestore, 'tasks');
  collectionData(ref).subscribe(value => {
    this.tasks = value as Task[]
  })


 }

addTask(task: Task): void {
   this.tasks.push(task);
   const ref = collection(this.firestore, 'tasks');
   addDoc(ref, task)
}
}
