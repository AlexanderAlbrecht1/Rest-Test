import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [MatCardModule, NgFor, RouterLink],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  apiList = [
    {
    "title" : "Poke-API",
    "url" : "https://pokeapi.co/api/v2/pokemon/3",
    "route" : "pokeAPI"
    },
    {
      "title" : "What the quack?",
      "url" : "https://random-d.uk/api/v2/quack",
      "route" : "quack"
    }

]


}
