import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  types = [
    "訪れた場所",
    "体温",
    "症状",
    "その他"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
