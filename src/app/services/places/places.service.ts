import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlaceSuggestion, PlaceSuggestionResponse } from './place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private apiKey = 'AIzaSyAKfWSJOMFWgtgPJTQCrdXC6mywzVpmYG0';

  constructor(
    private http: HttpClient
  ) { }

  getSuggestions(input: string) {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json`;
    const params = {
      input,
      key: this.apiKey,
    };
    return this.http.get<PlaceSuggestionResponse>(url, { params }).toPromise();
  }
  getPosition():Promise<any> {
    return new Promise((resolve,reject) => {
      navigator.geolocation.getCurrentPosition(response => {
        resolve({longitude:response.coords.longitude, latitude: response.coords.latitude})
      },
      err => {
        reject(err);
      })
    })
  }

  getDetails() {

  }
}
