import type { NextPage, GetStaticProps } from "next";
import { Button, Grid } from "@nextui-org/react";
import { MainLayout } from "../components/layouts";
//debo llamarlo así porque en esta dirección ya no está como default sino exportada normalmente
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

//puedo ponerlo como FC también
//Esta parte se renderiza tanto del lado del servidor como del cliente
const HomePage: NextPage<Props> = ({ pokemons }) => {
  //para graficar esto que digo que se renderiza de ambos lados si lo veo en el back aparece esto { prueba: 'undefined' }, en cambio en el cliente { prueba: 'object' } OJO
  /*   console.log({ prueba: typeof window }); */

  return (
    <MainLayout title="Lista de Pokemones">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </Grid.Container>
    </MainLayout>
  );
};

//esta función se ejecuta cuando se hace el build
//se ejecuta del lado del servidor, lo único que puedo pasar al cliente (front) son las props
//se usa solo en las pages

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: `${i + 1}`,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
