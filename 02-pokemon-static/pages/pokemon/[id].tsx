import { useState, useEffect } from "react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import confetti from 'canvas-confetti'
import { MainLayout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { getPokemonInfo, localStorageFavorites } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonIdPage: NextPage<Props> = ({ pokemon }) => {

  console.log(pokemon)

  const [isInFavorites, setIsInFavorites] = useState(false);

  //el localStorage existe en el front en el back no por eso lo pongo dentro de una funciòn al hacer click para que sea llamado solamente cuando clickeo la funciòn que esta del lado del cliente
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

//el del lado del servidor le digo a next que todos estos  paths van a ver
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //crea un array con 151 posiciones
  const pokemon151 = [...Array(151)].map((e, index) => {
    return {
      //el id debe ser string porque es un string lo que hay en la url
      params: { id: `${index + 1}` },
    };
  });

  return {
    paths: pokemon151,
    /*el blocking nos deja pasar al getStaticProps*/
    fallback: 'blocking',
/*     fallback: false, */ // si pongo true or 'blocking' me va a dejar entrar en un id que no existe, de esta modo en false tira un error 404
  };
};

//después que se ejecuta los paths pasa a GetStaticProps
export const getStaticProps: GetStaticProps = async ({ params }) => {
  //forma más fácil para algunos casos para definir el tipo de dato, el id es el que se ve en la url, que permite ser precargados en el getStaticPaths
  const { id } = params as { id: string };

  const pokemon =  await getPokemonInfo(id)
 
  if( pokemon === undefined) {
    return {
      redirect: {
        destination: '/',
        //esto de permanent sirve para los robots o sea si pongo permanent en true, va a tomar que siempre se va a redirigir a la página y nunca va a cambiar y la posibilidad que se agregue
        permanent: false
      }
    }
  }

  //si la página nueva existe en la petición en tiempo de producción me va a crear dicha página, y ya va a quedar creada por lo que si se vuelve a pedir no la va a volver a escribir ya toma la que se creo
  return {
    props: {
      pokemon
    },
    //cada cuanto se va a regenerar esta función
    revalidate: 86400 //60*60*24 (1día es eso no hagamos calcular a next)
  };
};

export default PokemonIdPage;
