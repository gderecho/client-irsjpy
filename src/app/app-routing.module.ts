import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoverComponent } from './cover/cover.component';
import { KankeishaComponent } from './kankeisha/kankeisha.component';
import { LearnComponent } from './learn/learn.component';
import { InquirythanksComponent } from './inquirythanks/inquirythanks.component';

const routes: Routes = [
  {
    path: '',
    component: CoverComponent
  },
  {
    path: 'kankeisha',
    component: KankeishaComponent
  },
  {
    path: 'learn',
    component: LearnComponent
  },
  {
    path: 'thanks',
    component: InquirythanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
