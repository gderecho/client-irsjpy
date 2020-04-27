import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalComponent } from './portal.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { ShareComponent } from './share/share.component';
import { RecordComponent } from './record/record.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: '', 
    component: PortalComponent,
    canActivate: [AuthGuardService],
    children: [
      { 
        path: 'share', 
        component: ShareComponent,
        canActivate: [AuthGuardService],
        //outlet: 'outlet-portal'
      },
      { 
        path: 'record', 
        component: RecordComponent,
        canActivate: [AuthGuardService],
        // outlet: 'outlet-portal'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
