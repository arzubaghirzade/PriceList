import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceListComponent } from '../price-list/price-list.component';


const routes: Routes = [
  {
    path: '',
    component: PriceListComponent,
    children:[
      {
        path: 'list/box-1',
        component: PriceListComponent
      },
      {
        path: 'list/box-1',
        component: PriceListComponent
      },
      {
        path: 'list/box-2',
        component: PriceListComponent
      },
      {
        path: 'list/box-3',
        component: PriceListComponent
      },
      {
        path: 'list/box-4',
        component: PriceListComponent
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminatesRoutingModule { }
