import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminatesRoutingModule } from './terminates-routing.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { PriceListComponent } from '../price-list/price-list.component';



@NgModule({
  declarations: [
    PriceListComponent
  ],
  imports: [
    CommonModule,
    TerminatesRoutingModule,
    DemoNgZorroAntdModule,
  ]
})
export class TerminatesModule { }
