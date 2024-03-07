import fetch from 'node-fetch';

const apiKey = 'PzVx7XkcdxuMF9dzRGLMVbamDjFfQ6KQ&language=pt-BR';

export default class FiltrosApi {
  
  async buscarTodosOsGeneros() {
    const response = await fetch(`https://api.nytimes.com/svc/timestags/v2/list.json?api-key=${apiKey}`);
    const data = await response.json();
    return this.filtrarGeneros(data.results);
  }


  filtrarGeneros(generos) {
    return generos.map((genero) => {
      return {
        nome: genero.name,
        descricao: genero.description,
      };
    });
  }
}
