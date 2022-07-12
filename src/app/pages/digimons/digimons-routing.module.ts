import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigimonsPage } from './digimons.page';

const routes: Routes = [
  {
    path: '',
    component: DigimonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigimonsPageRoutingModule {}
