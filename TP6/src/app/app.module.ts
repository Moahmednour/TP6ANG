import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

const appRoutes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee/:id', component: EmployeeEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent,
    EmployeeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
