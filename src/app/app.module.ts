import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ToDoComponent } from './to-do/to-do.component';
import{DragDropModule} from '@angular/cdk/drag-drop';
import { EditComponent } from './edit/edit.component';
import { TaskserviceService } from './taskservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    ToDoComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [TaskserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
