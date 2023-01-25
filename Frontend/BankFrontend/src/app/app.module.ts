import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input'
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import{MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgentComponent } from './agent/agent.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CompteComponent } from './compte/compte.component';
import { HttpClient } from '@angular/common/http';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogStandardComponent } from './client/dialog-standard/dialog-standard.component';
import {MatSelectModule} from '@angular/material/select';
import { DialogProfessionnelComponent } from './client/dialog-professionnel/dialog-professionnel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AgentComponent,
    CompteComponent,
    DashboardComponent,
    DialogStandardComponent,
    DialogProfessionnelComponent,
  ],
  imports: [
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  exports: [RouterModule,MatInputModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
