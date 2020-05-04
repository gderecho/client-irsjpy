import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class VoicesService {



  constructor(
    private http: HttpClient,
    private loc: Location,
    private geo: LocationService
  ) { 
    this.http.get(this.backurl).subscribe(
      (res: any) => {
        this.voices.next({
          loading: false,
          content: res
        });
      },
      (err) => {
        console.error(err);
      }
    );
    this.geo.place.subscribe(
      place => {
        console.log("Place updated, sorting voices");
        if('coords' in place && place['coords']) {
          this.voices.next({
            loading: true,
            content: this.get()
          });
          this.voices.next({
            loading: false,
            content: (this.get().sort((a: object,b: object) => {
              return (
                LocationService.distance(a['coords'],place['coords']) 
                - 
                LocationService.distance(b['coords'], place['coords'])
              );
            })),
          });
        } 
      }
    );
  }

  readonly backurl = environment.backurl.indexOf("http") === -1 ? 
    this.loc.prepareExternalUrl(environment.backurl) :
    environment.backurl;

  public voices : BehaviorSubject<any> = new BehaviorSubject<any>({
    loading: true,
    content: []
  });

  get() {
    return this.voices.value.content;
  }
}
