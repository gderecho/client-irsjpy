import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  readonly google = '../assets/powered_by_google_on_white.png';

  constructor() { }

  ngOnInit(): void {
  }

}
