
export interface PokemonListResponse {
    count:     number;
    next?:     string;
    previous?: string;
    results:   SmallPokemon[];
}

//las interfaces nos ayudan, OJO otra cosa yo puedo agregar propiedades aca y no me va a tirar error aquí, son como el esqueleto de lo que luego va a venir a mi entender. id por ej en lo original no existe pero eso no me crea un nuevo objeto le esta diciendo cuando utilice esta interface que puede tener in id y es del tipo number, si pongo un id con valor de string ahí si va a chillar, pero si no le pongo id cuando la utilice no va a decir nada

export interface SmallPokemon {
    name: string;
    url:  string;
    id: string;
    img: string
}