import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForminfoService {

  email: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  readonly url: string = this.loc.prepareExternalUrl(environment.backurl);

  constructor(
    private http: HttpClient,
    private route: Router,
    private loc: Location,
  ) { }

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
        this.route.navigate(['/thanks']);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }
}
