
import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemonData: any = null;
  pokemonName: string = '';

  constructor(private pokemonService: PokemonService) {}

  searchPokemon() {
    this.pokemonService.getPokemon(this.pokemonName.toLowerCase()).subscribe(
      data => {
        this.pokemonData = data;
      },
      error => {
        console.error('Error al Recuperar Pokemon', error);
        this.pokemonData = null;
      }
    );
  }
}
