import { NextPage } from 'next';
import { Grid } from '@nextui-org/react';
import { FavoritesCardPokemon } from './';


interface Props {
    pokemons: string[]
}

export const FavoritesPokemon: NextPage<Props>= ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
        {pokemons.map((id)=> (
         <FavoritesCardPokemon id={id} key={id}/>
        ))}
     </Grid.Container>
  )
};