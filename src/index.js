import html from "./index.html"
import './index.css';
import Utilities from "./modules/utilities.js";
import Events from "./modules/eventos.js";

let events = new Events();
let utilities = new Utilities();

// utilities.simulateCards(new Array(15).fill(undefined))
let listOfPokemons = []

document.addEventListener("DOMContentLoaded", e => {
  async function printDb () {
    listOfPokemons = await utilities.createRealCards(350)
  }  
  printDb()
})



document.addEventListener("click",e=>{  
  if(e.target.matches('.modalpokemon')){
     let modales = document.querySelectorAll('.modalpokemon')
     const index  = Array.from(modales).indexOf(e.target)
    console.log(listOfPokemons[index])
    events.modal(listOfPokemons[index])

    

    
    
  }
  if(e.target.matches('.fa-heart')){
    let heart = document.querySelectorAll('.fa-heart')
    const index  = Array.from(heart).indexOf(e.target)
    let contador = Array.from(document.querySelectorAll('.contador'))[index]
    contador.textContent = parseInt(contador.textContent) + 1
    // alert(contador)

    
  }


})
