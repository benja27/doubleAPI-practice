const connect_pokebase = async (start, end) => {
  
  let data; 

    let datos = [];

    for (let i = start; i < end; i++) {

      try {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((response) => response.json())
          .then((responseData) => {
            data = responseData; // Asignación de los datos a la variable data
            datos.push(data);
            // console.log(data); // Acceso a los datos dentro del bloque .then()
            // console.log("hola");
          });
        
      } catch (error) {
        
      }
      
      // La variable data también estará disponible aquí fuera del bloque .then()
      console.log(data);
      
      
    }
    console.log(datos);
    return datos;






}


export default connect_pokebase;