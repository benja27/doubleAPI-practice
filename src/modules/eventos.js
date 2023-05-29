class Events {
  constructor() {
    this.container = document.querySelector('.modal-content');
  }
  modal(pokemon) {   
    this.container.innerHTML = ''
      
    let template = `
    <div class="modal-header">
              <h5 class="modal-title " id="modalTitleId">${pokemon.name} </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        <div class="modal-body">

          <div class="d-flex gap-5">
            
            <div class="container-fluid d-flex">

              <div class="flex-grow-1">
                <img src=${pokemon.image} alt="">
              </div>

              <div class="bg-dark flex-grow-1" >
                <div class="card ">                  
                  <div class="card-body w-100">
                    <h4 class="card-title">recent comments</h4>                    
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Item 1</li>
                    <li class="list-group-item">Item 2</li>
                    <li class="list-group-item">Item 3</li>
                  </ul>
                </div>
              </div>            

            </div>

          </div>

          <div>

            <form action="" class="py-3" >
              <h3>Leave a comment</h3>

              <div class="form-floating mb-1">
                <input
                  type="text"
                  class="form-control" name="formId1" id="formId1" placeholder="">
                <label for="formId1">Name</label>
              </div>
  
              <div class="mb-3">
                <label for="" class="form-label"></label>
                <textarea class="form-control" name="" id="" rows="3"></textarea>
              </div>
            </div>
            </form>

          

        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
    `
    this.container.innerHTML += template
  }

  like (index){
    alert(index)  
  }
}

export default Events;