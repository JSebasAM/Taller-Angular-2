// src/app/modulo-3/modulo-3-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: 'pokemon-list',
    component: PokemonListComponent
  },
  {
    path: '**',
    redirectTo: 'pokemon-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo3RoutingModule {}

