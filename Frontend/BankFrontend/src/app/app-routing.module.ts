import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent/agent.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'agent', component:AgentComponent },
  { path:'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
