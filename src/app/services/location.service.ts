import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  readonly locurl = environment.backurl.indexOf("http") === -1 ? 
    this.loc.prepareExternalUrl(environment.locurl) :
    environment.locurl;

  apiAvailable: boolean;
  place: BehaviorSubject<any> = new BehaviorSubject<any>({
    loading: false,
    error: null,
    name: null
  });

  constructor(
    private loc: Location,
    private http: HttpClient
  ) { 
    if(navigator.geolocation) {
      console.info("geolocation api found");
      this.apiAvailable = true;
    } else {
      console.info("geolocation api not found");
      this.apiAvailable = false;
    }
  }

  private setLoc = (pos: any) => {
    let lonlat = {
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude
    }
    console.info("location obtained: ", lonlat);
    this.http.get(`${this.locurl}?latitude=${lonlat.latitude}&longitude=${lonlat.longitude}`).subscribe(
      (res: any) => {
        console.info("Hello")
        this.place.next({
          loading: false,
          name: res.result,
          error: null
        });
        console.log(this.place.value);
      },
      (err) => {
        this.place.next({
          loading: false,
          name: null,
          error: err
        });
        throw err;
      }
    )
  }

  find() {
    if(!this.apiAvailable) {
      console.error("Find location called, even though geolocation api unavailable");
      return;
    }
    if(this.place.value.loading) {
      console.error("Currently loading; find() called twice");
      return;
    }
    this.place.next({
      loading: true,
      name: null,
      error: null
    })
    navigator.geolocation.getCurrentPosition(this.setLoc);
  }


}
