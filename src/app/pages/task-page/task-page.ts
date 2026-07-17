import { Component, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Task } from '../../services/task';
import {RouterLink} from '@angular/router';
import {CompletedPipe} from '../../completed-pipe';

@Component({
  selector: 'app-task-page',  
  imports: [RouterLink, CompletedPipe],
  templateUrl: './task-page.html',
  styleUrls: ['./task-page.css'],
})
export class TaskPage {
  id!: number;

  task:any;

constructor(
  private route: ActivatedRoute,
  private taskService: Task,
  private cdr: ChangeDetectorRef
){}

ngOnInit(){

  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.taskService.getTaskById(id).subscribe(res=>{

    this.task = res;
    this.cdr.detectChanges();

  });

}
}
