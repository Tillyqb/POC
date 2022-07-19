import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { Employee } from "./models/employee";

import { TableComponent } from "./table.component";

describe("TableComponent", () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let mockService: any;

  beforeEach(async () => {
    const mockEmployees: Employee[] = [
      {
        id: "asdfpoi",
        id_number: "1",
        first_name: "Alex",
        second_name: "Hamilton",
        eid: "a.ham",
      },
      {
        id: "asdfopi",
        id_number: "2",
        first_name: "Aaron",
        second_name: "Burr",
        eid: "a.burr",
      },
    ];
    mockService = {
      getAllEmployees: jasmine
        .createSpy("getAllEmployees")
        .and.returnValue(mockEmployees),
      getEmployeeByFirstName: jasmine
        .createSpy("getEmployeeByFirstName")
        .and.returnValue(mockEmployees[1]),
    };
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TableComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // it("search should result in a list being saved to employees", async () => {
  //   component.search("");
  //   console.log(component.employees)
  //   await fixture.whenStable();
  //   expect(component.employees[0].first_name).toEqual("Aaron");
  // });
});
