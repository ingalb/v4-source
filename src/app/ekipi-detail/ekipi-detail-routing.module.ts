import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EkipiDetailPage } from './ekipi-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EkipiDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EkipiDetailPageRoutingModule {}
