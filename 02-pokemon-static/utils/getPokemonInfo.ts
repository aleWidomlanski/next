import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId:string) => {
    //se llama name en los  params porque el archivo se llama así 

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
  
    const pokemon = {
      sprites: data.sprites,
      name: data.name,
      id: `${data.id}`,
    };
  
    return pokemon
}
