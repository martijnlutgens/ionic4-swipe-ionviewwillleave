import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeDetailPage } from './home-detail.page';
import { CanDeactivateGuard } from 'src/app/auth/can-deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeDetailPage,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeDetailPage]
})
export class HomeDetailPageModule {}
