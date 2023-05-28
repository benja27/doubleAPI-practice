class Utilities {
  constructor() {
    this.container = document.querySelector('.container');
    this.pokeApiUrl = 'https://pokeapi.co/api/v2/';
  }
  simulateCards(array){
    // let container = document.querySelector('.container');
    let content = this.container.innerHTML

    array.forEach((item, index) => {
      let template = document.createElement('template');
      template.innerHTML = content;

      this.container.appendChild(template.content.cloneNode(true));
    })
  }

  async printPokemons(end){    

    this.container.innerHTML = '';

    for (let i = 1; i < end; i++) {
      const response = await fetch(`${this.pokeApiUrl}pokemon/${i}`);
      const data = await response.json();
      
      let pokemon = {
        name: data.name,
        image: data.sprites.front_default,
        id: data.id,
      }

      let template = `
      <div class="card">
      <div class="card-header text-center">
        {}
      </div>
      <div class="card-body">
        <img src={} alt="">
      </div>
      <div class="card-footer text-muted text-center">
        {}
      </div>
    </div>
      `

      this.container.innerHTML += template.replace('{}', pokemon.name).replace('{}', pokemon.image).replace('{}', pokemon.id);
    }

  }



}

export default Utilities;