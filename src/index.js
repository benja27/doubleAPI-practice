import html from "./index.html"
import './index.css';

import Cards from "./modules/utilities.js";
import PokeApi from "./modules/pokeApi.js";


let cards = new Cards();
let pokeApi = new PokeApi();

cards.simulateCards(new Array(10).fill(undefined));

// pokeApi.getPokemon(10)

async function paintPokemons() {
  let data = await pokeApi.getPokemon(450);
  // cards.useApiToCards(data);
}

paintPokemons();  


