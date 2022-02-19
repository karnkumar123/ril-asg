import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskArray: {taskStatus: string, taskValue: number}[] = [
    {taskStatus: 'High', taskValue: 30},
    {taskStatus: 'Medium', taskValue: 20},
    {taskStatus: 'Low', taskValue: 15},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
