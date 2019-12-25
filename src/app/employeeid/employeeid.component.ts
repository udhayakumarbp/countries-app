import { Component, OnInit } from '@angular/core';
import { CountriesService } from "../services/countries.service";


@Component({
  selector: 'app-employeeid',
  templateUrl: './employeeid.component.html',
  styleUrls: ['./employeeid.component.css']
})
export class EmployeeidComponent implements OnInit {
data: any;
  constructor(private empSer: CountriesService) { 
    this.getEmployee()

  }

  ngOnInit() {
  }
  async getEmployee(){
    try {
      this.data = await this.empSer.getEmployeeData()
      console.log(this.data)
    } catch (error) {
      console.error(error);
      
    }
  }
  

}
