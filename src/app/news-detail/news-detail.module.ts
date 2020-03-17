import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';

import { IonicModule } from '@ionic/angular';

import { NewsDetailPage } from './news-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NewsDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicHeaderParallaxModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewsDetailPage]
})
export class NewsDetailPageModule {}
