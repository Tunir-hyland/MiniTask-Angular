import { Component, ChangeDetectorRef, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../services/task';
import { TaskDetails } from '../task-details/task-details';
import { FormsModule } from '@angular/forms';

@Component({  
  selector: 'app-dashboard',
  imports: [CommonModule, TaskDetails, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {

  tasks: any[] = [];
  selectedTask: any = null;
  searchTerm: string = '';
  loading = true;

  @ViewChild('searchBox')
  searchBox!: ElementRef<HTMLInputElement>;

clearSearch() {
  this.searchTerm = '';
  this.searchBox.nativeElement.focus();
}

  constructor(private taskService: Task, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res.todos;
      this.loading = false;
      this.cdr.detectChanges();
    });
    
  }

viewTask(task: any) {

  if (this.selectedTask?.id === task.id) {
    this.selectedTask = null;  
  } else {
    this.selectedTask = task;  
  }

}

deleteTask(id: number) {
  this.tasks = this.tasks.filter(task => task.id !== id);
}

get completedCount(): number {
  return this.tasks.filter(t => t.completed).length;
}

}
