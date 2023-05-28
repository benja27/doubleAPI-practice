class Cards {
  constructor() {

  }
  simulateCards(ciclos) {
    let container = document.querySelector('.items-container');
    let content = container.innerHTML;

    ciclos.forEach(ciclo => {
      let template = document.createElement('template');
      template.innerHTML = content;

      container.appendChild(template.content.cloneNode(true))
    })
  }

  useApiToCards(data) {

    let container= document.querySelector('.items-container');
    container.innerHTML = '';
    

    data.forEach(pokemon => {
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
    });

  }
}

export default Cards;