
export interface PokemonListResponse {
    count:     number;
    next?:     string;
    previous?: string;
    results:   SmallPokemon[];
}

//las interfaces nos ayudan, OJO otra cosa yo puedo agregar propiedades aca y no me va a tirar error aquí, son como el esqueleto de lo que luego va a venir a mi entender. id por ej en lo original no existe pero eso no me tira error 

export interface SmallPokemon {
    name: string;
    url:  string;
    id: number;

}