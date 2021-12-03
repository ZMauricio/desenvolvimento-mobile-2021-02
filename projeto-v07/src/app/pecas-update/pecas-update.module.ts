import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PecasUpdatePageRoutingModule } from './pecas-update-routing.module';

import { PecasUpdatePage } from './pecas-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PecasUpdatePageRoutingModule
  ],
  declarations: [PecasUpdatePage]
})
export class PecasUpdatePageModule {}
