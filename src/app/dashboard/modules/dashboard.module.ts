import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class DashboardModule { }
