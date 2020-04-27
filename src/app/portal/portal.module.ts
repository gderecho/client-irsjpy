import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { LoginComponent } from './login/login.component';
import { RecordComponent } from './record/record.component';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [PortalComponent, LoginComponent, RecordComponent, ShareComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
  ]
})
export class PortalModule { }
