export class Employee {

  nom!: String;
  cin!: number;
  email!: String;

}

export class EmployeeWrapper {
  _embedded!: { employees: Employee[] };
}
