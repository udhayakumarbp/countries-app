import { Component } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';
  // data: any = [];
  // show = false;
  constructor() {
  }

  //  async onLoad() {
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
}
