
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'url';
import { Employee } from '../employee-list/employee';
import { EmployeeListApiService } from '../employee-list/employee-list.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:Employee;
  EnableSaveChanges:boolean;
  EnableAddNewEmp:boolean;

  constructor(private employeeApiService:EmployeeListApiService, 
    private route: ActivatedRoute,
    private router:Router) {
      this.EnableSaveChanges = false;
      this.EnableAddNewEmp = false;
     }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if(param){
      this.EnableSaveChanges =true
      const id = + param;
      this.employeeApiService.GetEmployee(id).subscribe((result:Employee) => {
        this.employee = result;
      });      
    }
    else{
      this.EnableAddNewEmp=true
      this.employee = new Employee();
    }
  }

  SaveChanges(emp:Employee){    
    alert(emp.id + ' Saved successfully');
    this.router.navigate(['/employees']);
  }

  AddNewEmployee(emp:Employee){
    this.employeeApiService.AddEmployee(emp).subscribe((result:boolean) => {
      if(result)
      alert(emp.firstName+ ' added successfully');
    });
    this.router.navigate(['/employees']);
  }
}
