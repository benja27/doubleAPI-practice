import html from "./index.html"
import './index.css';

import connect_pokebase from "./modules/conectingPokebase.js";
import Cards from "./modules/utilities.js";
  let cards = new Cards();

// cards.simulateCards(new Array(10).fill(undefined)); 



// let listOfPokemons = connect_pokebase(1, 20);

// cards.createCards( await listOfPokemons);

document.addEventListener("DOMContentLoaded", async () => {  
  
  let spiner = document.getElementById("spinner");
  spiner.style.display = "block";
  try {
    let listOfPokemons = await connect_pokebase(1, 80);
    cards.init( listOfPokemons );      
  } catch (error) {
    
  }finally{
    spiner.style.display = "none";
  }

})


