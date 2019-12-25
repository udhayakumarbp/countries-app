import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }
  countries: any;
  getAllCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all').toPromise();
  }

  async getByCountryName(name: string){
    try {
      this.countries = await this.getAllCountries();
    return this.countries.find(e => e.name === name);
    } catch (error) {
      console.log(error);
      
    }
  }
  getEmployeeData(){
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees").toPromise()
  }
}
