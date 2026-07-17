import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-task-details',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './task-details.html',
  styleUrls: ['./task-details.css'],
})
export class TaskDetails {
  @Input() task: any;

  @Output() deleteTask = new EventEmitter<number>();


  onDelete() {
    this.deleteTask.emit(this.task.id);
  }

}
