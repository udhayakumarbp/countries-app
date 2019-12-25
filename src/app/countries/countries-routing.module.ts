import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries.component';
import { CountriesListComponent } from '../countries-list/countries-list.component';


const routes: Routes = [
  {
    path: '',
    component: CountriesComponent
  },
  {
    path: ':name',
    component: CountriesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
