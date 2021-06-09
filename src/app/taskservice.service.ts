import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  task = [
    { title: "test", description: "developer", status: "open" },
    { title: "test1", description: "java", status: "in-progress" },
    { title: "test2", description: "developer", status: "completed" },
    { title: "test3", description: "java", status: "in-progress" },
    { title: "test4", description: "developer", status: "open" },
    { title: "test5", description: "java", status: "completed" }
  ];
  constructor() { }


}
