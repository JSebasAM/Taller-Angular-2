import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { Modulo3RoutingModule } from './modulo-3-routing-module';
import { Modulo3Component } from './modulo-3.component';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';
import { SharedModule } from '../shared/shared-module';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
    Modulo3Component,
    PokemonTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    Modulo3RoutingModule
  ]
})
export class Modulo3Module { }
