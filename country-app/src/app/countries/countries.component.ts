import { Component, OnInit } from '@angular/core';
import { CountriesService } from "../services/countries.service";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  data: any = [];
  show = false;
  constructor(private cs: CountriesService) {
    this.onLoad();
    
  }


  async onLoad() {
    try {
      this.data = await this.cs.getAllCountries().then(res => this.data = res);
      console.log(this.data);

    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit() {
  }

}
