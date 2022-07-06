import { useState, useEffect } from "react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import confetti from 'canvas-confetti'
import { pokeApi } from "../../api";
import { MainLayout } from "../../components/layouts";
import { Pokemon} from "../../interfaces";
import { localStorageFavorites } from "../../utils";
import { PokemonListResponse, SmallPokemon } from '../../interfaces/pokemon-list';
import { getPokemonInfo } from '../../utils/getPokemonInfo';


interface Props {
  pokemon: Pokemon;
}

const PokemonNamePage: NextPage<Props> = ({ pokemon }) => {

  console.log(pokemon)
  console.log('ooaa')

  const [isInFavorites, setIsInFavorites] = useState(false);

  const onToggleFavorite = () => {
    localStorageFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if (isInFavorites) return

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -180,
      origin: {
        x: 1,
        y: 0
      }
    })
  };

  useEffect(() => {
    setIsInFavorites(localStorageFavorites.existPokemonInFavorites(pokemon.id));
  }, [pokemon]);

  return (
    <MainLayout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>

              <Button
                color="gradient"
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                {isInFavorites
                  ? "Eliminar de favoritos"
                  : "Agregar a favoritos"}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);

  const pokemon151Name = data.results.map((e:SmallPokemon) => (
  {params: { name: `${e.name}` }}
  ))  

  return {
    paths: pokemon151Name,
    fallback: false, 
  };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
 
  //se llama name en los  params porque el archivo se llama así 
  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo(name)

  return {
    props: {
      pokemon
    },
  };
};

export default PokemonNamePage;
