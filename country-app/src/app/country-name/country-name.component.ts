import { Component, OnInit } from '@angular/core';
import { CountriesService } from "../services/countries.service";

@Component({
  selector: 'app-country-name',
  templateUrl: './country-name.component.html',
  styleUrls: ['./country-name.component.css']
})
export class CountryNameComponent implements OnInit {

  
  constructor(private cs: CountriesService) {
    
    
  }



  // async onLoad() {
  //   try {
  //     this.data = await this.cs.getAllCountries().then(res => this.data = res);
  //     console.log(this.data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // onClick() {
  //   this.show = !this.show;
  // }
  ngOnInit() {
  }

}
