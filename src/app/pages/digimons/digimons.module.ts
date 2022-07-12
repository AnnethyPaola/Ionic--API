import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigimonsPageRoutingModule } from './digimons-routing.module';

import { DigimonsPage } from './digimons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigimonsPageRoutingModule
  ],
  declarations: [DigimonsPage]
})
export class DigimonsPageModule {}
