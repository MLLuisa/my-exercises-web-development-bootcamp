// Fichero src/services/api.js
const callToApi = (searchMovie) => {
    // Llamamos a la API
    return fetch(`https://api.tvmaze.com/search/shows?q=${searchMovie}`)
      .then((response) => response.json())
      .then((data) => {
        // Cuando responde la API podemos limpiar los datos aquí
        
          const result = data.map((character) => {
          return {
            name: character.show.name,
            id: character.show.id,
          };
        });
        return result;
        });
  };
  
  export default callToApi;