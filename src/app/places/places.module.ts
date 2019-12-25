import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from './places/places.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlacesComponent],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PlacesModule { }
