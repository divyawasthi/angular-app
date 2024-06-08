import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{ title: string; summary: string;  dueDate : string}>();
  enteredTitle: string = "";
  enteredSummary: string = "";
  enteredDate: string = "";
  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.submit.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate:this.enteredDate
    })
  }
}
