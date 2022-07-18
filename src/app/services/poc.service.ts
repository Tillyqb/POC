import axios from "axios";
import { Injectable } from "@angular/core";
import { Employee } from "../table/models/employee";

@Injectable({
  providedIn: "root",
})
export class POCService {
  private ENDPOINT = "http://localhost:8080/";
  private employees: Employee[] = [];

  constructor() {}
  public async getAllEmployees() {
    const res = await axios.get(this.ENDPOINT);
    console.log(res);
    this.employees = res.data;
    console.log(this.employees);
    return this.employees;
  }

  public async getEmployeeByFirstName(firstName: string): Promise<Employee[]> {
    const employeeList: Employee[] = await this.getAllEmployees();
    if (firstName == "") {
      return employeeList;
    } else {
      let result: Employee[] = [];
      for (let employee of employeeList) {
        employee.first_name == firstName ? result.push(employee) : null;
      }
      return result;
    }
  }
}
