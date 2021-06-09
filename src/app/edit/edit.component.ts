import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   task=[{title:"test", description:"developer", status:"Open"}]
  constructor() { }

  ngOnInit(): void {
  }

}
