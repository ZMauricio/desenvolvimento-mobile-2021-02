import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PecasUpdatePage } from './pecas-update.page';

const routes: Routes = [
  {
    path: '',
    component: PecasUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PecasUpdatePageRoutingModule {}
