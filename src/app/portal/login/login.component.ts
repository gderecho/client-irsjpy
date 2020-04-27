import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  async login() {
    console.debug("Attempting to log in...");
    await this.auth.login().then(() => {
      console.debug("Logged in")
      this.route.navigate(['/portal']);
    });
  }

  request() {
    this.http.get(environment.portalurl).subscribe(a => {console.debug("reqested", a)});
  }

}
