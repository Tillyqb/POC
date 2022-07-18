import { TestBed } from "@angular/core/testing";

import { POCService } from "./poc.service";

describe("POCServiceService", () => {
  let service: POCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(POCService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
