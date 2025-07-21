import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

  pokeNumber : number = 161;
  baseUrl:string = 'https://pokeapi.co/api/v2/pokemon/'
  currentPokemon : string = '';

  loadPokemon() {
    console.error('hier pssiert gerade nix!');

  }

}
