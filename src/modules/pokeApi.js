class PokeApi {
    constructor() {
        this.baseUrl = 'https://pokeapi.co/api/v2/';
    }

    async getPokemon(end) {

      let container= document.querySelector('.items-container');
      container.innerHTML = '';
    //   let template = `
    //   <div class="card">
    //   <div class="card-header text-center">
    //     ${pokemon.name}
    //   </div>
    //   <div class="card-body">
    //     <img src=${pokemon.picture} >        
    //   </div>
    //   <div class="card-footer text-muted text-center">
    //     <div class="d-flex justify-content-around" >
    //       <button type="button" class="btn btn-primary">Button</button>
    //       <div class="d-flex gap-4 align-items-center" >
    //         <h5 class="m-0 pe-1" >likes  <span class="ps-2 " data-id=${pokemon.id}></span>  </h5>
    //         <i class="fa-solid fa-heart" data-id=${pokemon.id}></i>
    //       </div>

    //     </div>
    //   </div>
    // </div>
    //   `


      let info = [];
      for (let i = 1; i < end; i++) {        
        const response = await fetch(`${this.baseUrl}pokemon/${i}`);
        const data = await response.json();
        

        let pokemon = {
          name : data.name,
          picture : data.sprites.front_default,
          id : data.id  
        }
        info.push(pokemon);

        let template = `
      <div class="card">
      <div class="card-header text-center">
        ${pokemon.name}
      </div>
      <div class="card-body">
        <img src=${pokemon.picture} >        
      </div>
      <div class="card-footer text-muted text-center">
        <div class="d-flex justify-content-around" >
          <button type="button" class="btn btn-primary">Button</button>
          <div class="d-flex gap-4 align-items-center" >
            <h5 class="m-0 pe-1" >likes  <span class="ps-2 " data-id=${pokemon.id}></span>  </h5>
            <i class="fa-solid fa-heart" data-id=${pokemon.id}></i>
          </div>

        </div>
      </div>
    </div>
      `

      container.innerHTML += template;

        
      }

      console.log(info);
      return info;

    }
}

export default PokeApi;