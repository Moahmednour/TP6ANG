import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  id: any;
  data: any;
  employee = new Employee();
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getEmployeeById(this.id).subscribe((res:any) => {
      console.log(res);
      this.employee = res;
    });
  }

  updateEmployee() {
    this.dataService.updateData(this.id, this.employee).subscribe((res) => {});
  }
}
