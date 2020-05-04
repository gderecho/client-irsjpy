import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForminfoService {

  email: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  error: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  data: any = {
    email: "",
    name: "",
    message: "",
    soufuhouhou: "",
    tarinaimono: "",
    fusoku: null,
    ippannsoufu: null,
  };

  reset() {
    this.data = {
      email: "",
      name: "",
      message: "",
      soufuhouhou: "",
      tarinaimono: "",
      fusoku: null,
      ippannsoufu: null,
    }
  }


  readonly url: string = (
    environment.backurl.indexOf('http') === -1 ?
    this.loc.prepareExternalUrl(environment.backurl) : 
    environment.backurl
  );

  constructor(
    private http: HttpClient,
    private route: Router,
    private loc: Location,
  ) { 
    this.route.events.subscribe((e) => {
      if(e instanceof NavigationStart) {
        this.error.next(null);
      }
    })
  }

  submit(data: object) {
    this.http.post<object>(
      this.url,
      data,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    ).subscribe(
      (a : object) => {
        console.info(a);
        this.email.next(a['msg']['email']);
        this.reset();
        this.route.navigate(['/thanks']);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        this.error.next(error.message);
      }
    );
  }
}
