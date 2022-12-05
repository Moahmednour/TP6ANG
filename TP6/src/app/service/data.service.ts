import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpclient: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>('http://localhost:8080/employee');
  }
  insertData(data: Employee) {
    return this.httpclient.post('http://localhost:8080/employee', data);
  }
  deleteData(id: String) {
    return this.httpclient.delete('http://localhost:8080/employee/' + id);
  }
  getEmployeeById(id: String) {
    return this.httpclient.get('http://localhost:8080/employee/' + id);
  }

  updateData(id: any, data: Employee) {
    return this.httpclient.put('http://localhost:8080/employee/' + id, data);
  }
}
