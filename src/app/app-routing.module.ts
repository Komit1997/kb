import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditComponent } from './edit/edit.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [
{path:'create-task', component:CreateTaskComponent},
{path:'to-do', component:ToDoComponent},
{path :'edit',component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
