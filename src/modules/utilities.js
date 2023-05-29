class Utilities {
  constructor() {
    this.ApiUrlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
    this.container = document.querySelector('.container');
  }

  simulateCards(array) {
    let content = this.container.innerHTML
    console.log(content)
    
    // this.container.innerHTML = '';

    array.forEach(e => {
      let template = document.createElement('template');
      template.innerHTML = content;

      // template.content.cloneNode(true)

      this.container.appendChild(template.content.cloneNode(true));
    });
  }

  async builtRealCards(end) {

    this.container.innerHTML = '';
    for (let i = 1; i < end ; i++) {
      const respond = await fetch(`${this.ApiUrlPokemon}${i}`);
      const data = await respond.json();
      console.log(data)
      let pokemon = {
        name: data.name,
        id: data.id,
        image: data.sprites.front_default,
      }

      let template = `
      <div class="card">
      <div class="card-header text-center">
        {}
      </div>
      <div class="card-body">
        <img src={} alt="">
      </div>
      <div class="card-footer text-muted">
        <h4 class="pb-2 text-center">{}</h4>
        <div class="d-flex justify-content-around ">
          <button type="button" class="btn btn-primary">Button</button>
          <div class="d-flex gap-3 align-items-center">
             <span>likes</span>  <span>{}</span>
            <i class="fa-solid fa-heart" ></i>
          </div>
        </div>
      </div>
    </div>
      `  
      this.container.innerHTML += template.replace('{}', pokemon.name).replace('{}', pokemon.image).replace('{}', pokemon.name).replace('{}', pokemon.id)  

      
    }




  }



}

export default Utilities;