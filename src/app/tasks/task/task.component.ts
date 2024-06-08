import { Component, EventEmitter, Input, Output } from '@angular/core';


type Task = {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task; 
  @Output() complete = new EventEmitter<string>();
  onComplete() {
    this.complete.emit(this.task.id);
  }
}