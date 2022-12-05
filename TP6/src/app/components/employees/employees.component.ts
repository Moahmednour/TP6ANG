import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Employee } from 'src/app/model/employee.model';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employee = new Employee();
  employees: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getEmployeeData();
  }
  getEmployeeData() {
    this.dataService.getAllEmployees().subscribe((res) => {
      console.log(res);
      this.employees = res;
    });
  }
  insertData() {
    this.dataService.insertData(this.employee).subscribe((res: any) => {
      console.log(res);
      this.getEmployeeData();
    });
  }
  deleteData(id: any) {
    this.dataService.deleteData(id).subscribe((res) => {
      this.getEmployeeData();
    });
  }
}
