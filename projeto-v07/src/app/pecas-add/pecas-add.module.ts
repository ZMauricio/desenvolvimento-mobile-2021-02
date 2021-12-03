import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PecasAddPageRoutingModule } from './pecas-add-routing.module';

import { PecasAddPage } from './pecas-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PecasAddPageRoutingModule
  ],
  declarations: [PecasAddPage]
})
export class PecasAddPageModule {}
