import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'digimons',
    pathMatch: 'full'
  },
  {
    path: 'digimons',
    loadChildren: () => import('./pages/digimons/digimons.module').then( m => m.DigimonsPageModule)
  },
 
  {
    path: 'detalles/:name',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
