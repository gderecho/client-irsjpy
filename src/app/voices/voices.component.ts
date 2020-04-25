import { Component, OnInit } from '@angular/core';
import { VoicesService } from '../services/voices.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-voices',
  templateUrl: './voices.component.html',
  styleUrls: ['./voices.component.scss']
})
export class VoicesComponent implements OnInit {

  constructor(
    public voices: VoicesService,
    public geo: LocationService
  ) { }

  ngOnInit(): void {
  }

  isstring(s: any): boolean {
    return typeof s === 'string';
  }

}
