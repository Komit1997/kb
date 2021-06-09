import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {



  constructor(private task:TaskserviceService,
    private fb:FormBuilder) { }

    taskForm = this.fb.group({
      title:[""],
      description:[""],
      status:[""]
    })

  ngOnInit(): void {
    console.log(this.task.task)
   
  }
  onSave():void{
    let value = this.taskForm.value;
    this.task.task.push(value);
    console.log(this.task.task)
  }

}
