import { Injectable } from '@angular/core';
import AppID from 'ibmcloud-appid-js';
import { environment } from 'src/environments/environment'
import * as localforage from 'localforage';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
// credit to https://ponzmild.hatenablog.com/entry/2019/12/01/181820
export class AuthService {
  private appid = new AppID();
  private token: any = null;

  constructor() { 
    this.init().then(
      () => {
        console.info("Initialized AppID.");
      }
    );
    localforage.getItem('token').then((value) => {
      this.token = value;
    }).catch((err) => {
      console.error(err);
      throw err;
    });
  }

  private async init() {
    await this.appid.init({
      clientId: environment.appidClientID,
      discoveryEndpoint: environment.appidDiscoveryEndpoint
    });
  }

  authenticated(): boolean {
    if(!this.token) {
      return false;
    }
    return !jwt.isTokenExpired(this.token.accessToken);
  }

  getToken(): string {
    return this.token;
  }

  async login() {
    this.token = await this.appid.signin();
    console.debug("Got token", this.token);
    localforage.setItem('token', this.token).catch((err) => {
      console.error(err);
      throw err;
    })
  }

  async getinfo() {
    return await this.appid.getUserInfo(this.token);
  }


}
