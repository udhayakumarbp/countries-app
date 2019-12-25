import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PlacesService } from 'src/app/services/places/places.service';
import { PlaceSuggestion } from 'src/app/services/places/place';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  searchCtrl = new FormControl('');
  suggestions: PlaceSuggestion[] = [];

  constructor(
    private placesServ: PlacesService
  ) { }

  ngOnInit() {
    this.listenPlaceInputs();
  }

  private listenPlaceInputs() {
    this.searchCtrl.valueChanges.subscribe(async (value) => {
      if (value.length < 2) {
        return;
      }

      try {
        const result = await this.placesServ.getSuggestions(value);
        this.suggestions = result.predictions;
        console.log(result.predictions);
      } catch (error) {
        console.error(error);
      }
    });

  }

}
