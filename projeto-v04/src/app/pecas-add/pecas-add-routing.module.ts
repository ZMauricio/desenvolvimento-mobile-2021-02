import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PecasAddPage } from './pecas-add.page';

const routes: Routes = [
  {
    path: '',
    component: PecasAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PecasAddPageRoutingModule {}
