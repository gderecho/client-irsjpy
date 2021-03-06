import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoverComponent } from './cover/cover.component';
import { KankeishaComponent } from './kankeisha/kankeisha.component';
import { LearnComponent } from './learn/learn.component';
import { InquirythanksComponent } from './inquirythanks/inquirythanks.component';
import { VoicesComponent } from './voices/voices.component';

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
    path: 'koe',
    component: VoicesComponent
  },
  {
    path: 'thanks',
    component: InquirythanksComponent
  },
  // { path: 'portal', loadChildren: () => import('./portal/portal.module').then(m => m.PortalModule) },
  { path: 'privacy', loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyModule) },
  { path: 'terms', loadChildren: () => import('./terms/terms.module').then(m => m.TermsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
