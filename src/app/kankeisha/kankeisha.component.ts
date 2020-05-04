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

  data = this.forminfo.data;

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
    public forminfo: ForminfoService
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.forminfo.submit(this.data);
  }

}
