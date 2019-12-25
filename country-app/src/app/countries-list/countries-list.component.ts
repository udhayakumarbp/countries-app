import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import { CountriesService } from '../services/countries.service'

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  name='';
  details : any;
  constructor(
    private route : ActivatedRoute,
    private cs: CountriesService
  ) { }

 async ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    console.log(this.name);
    
    try {
      this.details =  await this.cs.getByCountryName(this.name)
      
    } catch (error) {
      console.log(error);
      
    }
  }

}
