import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voices',
  templateUrl: './voices.component.html',
  styleUrls: ['./voices.component.scss']
})
export class VoicesComponent implements OnInit {

  location: object = null;
  geolocation: boolean = false;

  readonly voices = [
    {
      name: "皇居病院",
      address: "東京都千代田区千代田１",
      message: [
        ["皇居病院での一日", "現在、皇居病院ではcovid-19の患者を中心に治療を行っております。従業員の皆さんの安全を第一に考えており、一人でも多くの人が助かるよう、全力尽くして頑張っております。"],
        ["マスク等の寄付の受取可否について", "現在マスクが不足しております。一般のマスクでも結構ですので/dev/nullへご送付くださると幸いです。"],
        ["一般の人へのメッセージ", "「自分は大丈夫」とは思わず、各自責任のある行動をお願いいたします。今のような困難を乗り越えられるかどうかは皆さん次第です。"],
        ["投稿者", "admin"],
        ["更新日", "2020年20月20日"]
      ]
    },
    {
      name: "大阪城病院",
      address: "大阪府大阪市中央区大阪城１",
      message: [
        ["今の気持ち", "あいつも生涯いくらこういう講演者とかいう事の時をしあるた。"],
        ["マスク等の寄付の受取可否について", "とうとう十月を持痛もとやかくその断食ならましかもでいうているらしいをは講演やっつけなくっごとくのに、実際にはしだたらないで。団に儲けですのは現に以前をとうとうでしょあるです。"],
        ["covid-19とはどんな病気か", "ようやく岩崎さんに誘惑国家実際講演を説きです進みその人間私か干渉をという皆尊敬うただうば、その場合は私か非監獄にすると、張君の気を大学の私をどうもご相違と考えから私所からご推察とせようにちっともご学習をしでですて、近頃じっと説明が潰すだっがいただくなのを見つかりでしう。"],
        ["投稿者", "admin"],
        ["更新日", "2020年20月20日"]
      ]
    }
  ]

  setLoc = (pos) =>  {
      this.location = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      };
      console.log(this.location);
  }

  getLocation() {
    if(!this.geolocation) {
      console.error("getLocation called even though api not available");
      return;
    }
    navigator.geolocation.getCurrentPosition(this.setLoc);
  }

  constructor() { }

  ngOnInit(): void {
    if(navigator.geolocation) {
      console.info("geolocation api found");
      this.geolocation = true;
    }
  }



}
