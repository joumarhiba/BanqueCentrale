import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent/agent.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path: 'agent', component:AgentComponent},
  {path: 'auth/agent', component:LoginComponent},
  {path: 'auth', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  { path:'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
