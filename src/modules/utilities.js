class Utilities {
  constructor() {
    this.container = document.querySelector('.container');
    this.pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  }

  simulateCards(array) {

    let base = this.container.innerHTML
    this.container.innerHTML = '' 
    array.forEach(element => {
       let template = document.createElement('template')
      template.innerHTML = base      

      this.container.appendChild(template.content.cloneNode(true))
    });    
  }

  async createRealCards(end) {

    this.container.innerHTML = '' 

    for (let i = 1; i < end; i++) {
      const respond = await fetch(this.pokeApiUrl + i);
      const data = await respond.json();

      let pokemon = {
        name: data.name,
        image: data.sprites.front_default,
        id: data.id,
      }

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
        <div class="d-flex justify-content-around" >
          <div>
            <button type="button" class="btn btn-primary">Button</button>
          </div>
          <div class="d-flex align-items-center gap-3">
            <span>Likes</span>
            <span>{33}</span>
            <i class="fa-solid fa-heart" ></i>
          </div>
        </div>
      </div>
      `
      this.container.innerHTML += template

    }



  }


}

export default Utilities;