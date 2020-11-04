import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { Employee } from './employee';
import { EmployeeListApiService } from './employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @ViewChild('agGrid', {static: false}) agGrid:AgGridAngular;

  constructor(private employeeApiService:EmployeeListApiService, private router:Router) { }

  columnDefs: Array<any>;
  rowData: Array<Employee>;

  ngOnInit() {
    // this.columnDefs = [
    //   {
    //     field: 'id', 
    //     sortable: true,         
    //   },
    //   { field: 'firstName', filter: true },
    //   { field: 'lastName' },
    //   { field: 'mobileNumber' }
    // ];

    this.employeeApiService.GetEmployees().subscribe((result) => {
      this.rowData = result;
    });
  }
  editRow(id:number){
    this.router.navigate(['/employee', id]);
  }
  
  DeleteEmployee(employee:Employee){      
    this.rowData.splice(this.rowData.indexOf(employee),1);
  }

}