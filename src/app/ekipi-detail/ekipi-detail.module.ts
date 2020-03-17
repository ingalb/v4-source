import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EkipiDetailPageRoutingModule } from './ekipi-detail-routing.module';

import { EkipiDetailPage } from './ekipi-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EkipiDetailPageRoutingModule
  ],
  declarations: [EkipiDetailPage]
})
export class EkipiDetailPageModule {}
