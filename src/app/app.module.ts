import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';
import { FooterComponent } from './footer/footer.component';
import { KankeishaComponent } from './kankeisha/kankeisha.component';
import { LearnComponent } from './learn/learn.component';
import { InquirythanksComponent } from './inquirythanks/inquirythanks.component';
import { VoicesComponent } from './voices/voices.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    FooterComponent,
    KankeishaComponent,
    LearnComponent,
    InquirythanksComponent,
    VoicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
