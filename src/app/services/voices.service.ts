import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoicesService {



  constructor(
    private http: HttpClient,
    private loc: Location
  ) { 
    this.http.get(this.backurl).subscribe(
      (res) => {
        this.voices.next(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  readonly backurl = environment.backurl.indexOf("http") === -1 ? 
    this.loc.prepareExternalUrl(environment.backurl) :
    environment.backurl;
  public voices : BehaviorSubject<object> = new BehaviorSubject<object>([]);


  get() {
    return this.voices.value;
  }
}
