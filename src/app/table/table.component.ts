import { Component, OnInit } from "@angular/core";
import { POCService } from "../services/poc.service";
import { Employee } from "./models/employee";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit {
  public form: FormGroup;
  public employees: Employee[] = [];
  public firstName: string = "";

  constructor(
    private pocService: POCService,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      firstName: new FormControl("", [Validators.pattern("^[a-zA-Z]+")]),
    });
  }

  ngOnInit(): void {
    this.search("")
  }

  public search(firstName: string) {
    this.employees = [];
    console.log("firstName: ", firstName);
    this.firstName = firstName;
    this.pocService
      .getEmployeeByFirstName(firstName)
      .then((data: Employee[]) => {
        data.forEach((employee) => {
          this.employees.push(employee);
        });
      });
    console.log(this.employees);
  };
}
