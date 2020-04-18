import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-kankeisha',
  templateUrl: './kankeisha.component.html',
  styleUrls: ['./kankeisha.component.scss']
})
export class KankeishaComponent implements OnInit {

  email="";
  message="";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log({
      email: this.email,
      message: this.message
    });
    let url : string = 'http://localhost:3000';
    this.http.post<object>(
      url,
      {
        email: this.email,
        message: this.message
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    ).subscribe(a => console.log(a));
  }

}
