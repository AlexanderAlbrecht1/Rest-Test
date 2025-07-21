import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent {
  pokeNumber: number = 161;
  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  currentPokeApi: string = '';
  Pokemon: any;

  constructor(private http: HttpClient) {}

  loadPokemon() {
    this.currentPokeApi = this.baseUrl + this.pokeNumber;
    return this.http.get<any>(this.currentPokeApi);
  }

  showPokemon() {
    this.loadPokemon().subscribe((response) => {
      this.Pokemon = response;
      console.log(this.Pokemon);
    });
  }

}
