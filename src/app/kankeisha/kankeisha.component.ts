import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.data);
    let url : string = 'http://localhost:3000';
    this.http.post<object>(
      url,
      this.data,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    ).subscribe(a => console.log(a));
  }

}
