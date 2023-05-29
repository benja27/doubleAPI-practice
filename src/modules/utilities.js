class Utilities {
  constructor() {
    this.container = document.querySelector('.container');
    this. apiUrlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  }

  simulateCards(list){
    let content = this.container.innerHTML

    this.container.innerHTML = ''

    list.forEach(element => {
      let template = document.createElement('template');
      template.innerHTML = content

      this.container.appendChild(template.content.cloneNode(true))
    });
  }

  async createRealCards(end) {

    let listOfPokemons = [] 

    this.container.innerHTML = ''

    for (let i = 1; i < end; i++) {
      const response = await fetch(this.apiUrlPokemon + i);  
      const data = await response.json();

      let pokemon = {
        name: data.name,
        image: data.sprites.front_default,
        id: data.id
      }

      listOfPokemons.push(pokemon)

      let template = `
        <div class="card">
        <div class="card-header text-center">
          ${pokemon.name}
        </div>
        <div class="card-body text-center">          
          <img src=${pokemon.image} alt="">
        </div>
        <div class="card-footer text-muted text-center">
          ${pokemon.id}
        </div>

        <div class="d-flex justify-content-around py-2" >

          <button type="button" class="btn modalpokemon btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
            Launch
          </button>

          <div class="d-flex align-items-center gap-2">
            <span>likes</span>
            <span class="contador" >33</span>
            <i class="fa-solid fa-heart" data-id=${i} ></i>
          </div>
        </div>
      </div>     
      
      `     
      this.container.innerHTML += template 
      
    }

    return listOfPokemons
  }




}
export default Utilities;