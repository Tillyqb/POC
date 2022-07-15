import { Component, OnInit } from '@angular/core';
import input from '../../assets/employees.json'
import { Employee } from './models/employee';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  employees: Employee[] = input;

  constructor() { }

  ngOnInit(): void {
    console.log (this.employees)
  }

}
