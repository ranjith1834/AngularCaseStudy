import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee as Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListApiService {
  
  employeeList: Array<Employee> = [
    {id:1001, firstName:"RANJITH", middleName:"", lastName:"Nagavelli", email:"ranjith.nagavelli@gmail.com", mobileNumber:"9874563210"},
    {id:1002, firstName:"User1", middleName:"middleNameOne", lastName:"lastName1", email:"User1.lastname1@gmail.com", mobileNumber:"1234567890"},
    {id:1003, firstName:"User2", middleName:"middleNameTwo", lastName:"lastName2", email:"User2.lastname2@gmail.com", mobileNumber:"1236589742"},    
    {id:1004, firstName:"Ashok", middleName:"", lastName:"Nagavelli2", email:"ranjith2.nagavelli2@gmail.com", mobileNumber:"9874563210"},
    {id:1005, firstName:"vamsi", middleName:"middleNameOne2", lastName:"lastName12", email:"User12.lastname12@gmail.com", mobileNumber:"12345678902"},
    {id:1006, firstName:"Charan", middleName:"middleNameTwo2", lastName:"lastName22", email:"User22.lastname22@gmail.com", mobileNumber:"12365897422"},
    {id:1007, firstName:"RANJITH3", middleName:"", lastName:"Nagavelli3", email:"ranjith3.nagavelli3@gmail.com", mobileNumber:"98745632103"},
    {id:1008, firstName:"Chiru", middleName:"middleNameOne3", lastName:"lastName13", email:"User13.lastname1@gmail.com", mobileNumber:"12345678903"},
    {id:1009, firstName:"Pawan", middleName:"middleNameTwo3", lastName:"lastName23", email:"User23.lastname2@gmail.com", mobileNumber:"12365897423"}
  ];
  private lastindex:number = 1009;

  constructor() { }

  GetEmployees():Observable<Array<Employee>> {
    return of(this.employeeList);
  }

  GetEmployee(id:number):Observable<Employee> {     
    return of(this.employeeList.find(e => e.id === id));
  }

  AddEmployee(employee: Employee):Observable<boolean> {
    employee.id = ++this.lastindex;    
    this.employeeList.push(employee);
    return of(true);
  }
}
