import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { TaskPage } from './pages/task-page/task-page';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: Dashboard
  },

  {
    path: 'task/:id',
    component: TaskPage
  }

];