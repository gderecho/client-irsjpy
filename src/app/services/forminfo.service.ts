import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForminfoService {

  email: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  readonly url: string = 'http://localhost:3001';

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  submit(data: object) {
    console.info("Sending data: ", data);
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
