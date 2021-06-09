import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  taskArray: any = [];
  taskCompleted: any = [];
  taskInprogress: any = [];
  taskopen: any = [];
  constructor(private task: TaskserviceService) { }

  ngOnInit(): void {
    this.taskArray = this.task.task;
    this.taskArray.forEach((element: any) => {
      if (element.status == "completed") {
        this.taskCompleted.push(element);
      } else if (element.status == "open") {
        this.taskopen.push(element);
      } else if (element.status == "in-progress") {
        this.taskInprogress.push(element);
      }

    });
  }

}
