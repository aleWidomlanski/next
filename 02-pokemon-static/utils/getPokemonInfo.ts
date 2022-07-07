import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  //se llama name en los  params porque el archivo se llama así 

  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    const pokemon = {
      sprites: data.sprites,
      name: data.name,
      id: `${data.id}`,
    };

    return pokemon

  } catch (error) {
    //si hay un error 404 va aca
    null
  }

}
