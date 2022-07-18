import { Component, OnInit } from "@angular/core";
import input from "../../assets/employees.json";
import { POCService } from "../services/poc.service";
import { Employee } from "./models/employee";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private pocService: POCService) {}

  ngOnInit(): void {
    this.pocService.getAllEmployees()
    .then((data: Employee[]) => { 
      data.forEach((employee) => {
        this.employees.push(employee)
      }
      )
    })
    console.log(this.employees);
  }
}
