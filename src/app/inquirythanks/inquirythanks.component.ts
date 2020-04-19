import { Component, OnInit, Input } from '@angular/core';
import { ForminfoService } from '../services/forminfo.service';

@Component({
  selector: 'app-inquirythanks',
  templateUrl: './inquirythanks.component.html',
  styleUrls: ['./inquirythanks.component.scss']
})
export class InquirythanksComponent implements OnInit {

  constructor(private forminfo: ForminfoService) { }

  email: string = null;

  ngOnInit(): void {
    this.email = this.forminfo.email.value;
  }

}
