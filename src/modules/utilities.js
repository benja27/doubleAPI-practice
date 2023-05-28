class Cards {
  constructor() {
    this.data = [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    ];
    
  }
  simulateCards(list) {
    let container = document.querySelector(".items-container");

    let content = document.querySelector(".items-container").innerHTML;

    list.forEach((item) => {
      let base = document.createElement("template");

      base.innerHTML = content;

      container.appendChild(base.content.cloneNode(true)); 
    })
  }
  createCards(list) {
    let container = document.querySelector(".items-container");

    container.innerHTML = "";
    if(!list){
      list = this.data;
    }
    list.forEach((item) => {
      let base = `
  <div class="card">
  <div class="card-header text-center">
    <h3>
      ${item.name}
    </h3>
  </div>
  <div class="card-body"> 
    <img src=${item.sprites.front_shiny} alt="">           
    <div class="d-flex justify-content-around pt-3">
      <h3>${item.name}</h3>
      <div class="d-flex flex-column align-items-center gap-2" >
        <i class="fa-solid fa-heart" ></i>                
        <h6>20 likes</h6>
      </div>
    </div>
  </div>
  <div class="card-footer text-muted text-center">
    <h4>
      ${item.name}
    </h4>
  </div>
</div>
  `;      
      let container = document.querySelector(".items-container");
      container.innerHTML += base;
    });
  }
  init() {

  }
  
  async init(listOfPokemons) {
    // let listOfPokemons = await functionToExecute;
    this.createCards(listOfPokemons);
  }
}

export default Cards;
