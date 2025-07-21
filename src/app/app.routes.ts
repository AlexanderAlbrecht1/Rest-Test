import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DuckComponent } from './duck/duck.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'pokeAPI', component: PokemonComponent },
  { path: 'quack', component: DuckComponent },
];
