import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ForminfoService } from '../services/forminfo.service';

@Component({
  selector: 'app-kankeisha',
  templateUrl: './kankeisha.component.html',
  styleUrls: ['./kankeisha.component.scss']
})
export class KankeishaComponent implements OnInit {

  data = {
    email: "",
    name: "",
    message: "",
    soufuhouhou: "",
    tarinaimono: "",
    fusoku: null,
    ippannsoufu: null,
  };

  readonly yesOrNo=new Map<boolean, string>([
    [null, "未選択"],
    [true, "はい"],
    [false, "いいえ"]
  ]);

  cmp(a,b): number {
    return 0;
  }

  constructor(
    private http: HttpClient,
    private route: Router,
    private forminfo: ForminfoService
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.data);
    let url : string = 'http://localhost:3001';
    this.http.post<object>(
      url,
      this.data,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    ).subscribe(
      (a : object) => {
        console.info(a);
        this.forminfo.email.next(a['msg']['email']);
        this.route.navigate(['/thanks']);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

}
