
import { useState, useEffect } from 'react';

import { MainLayout } from "../../components/layouts";
import { NoFavorites, FavoritesPokemon } from "../../components/ui";

import { localStorageFavorites } from '../../utils';


const FavoritesPage = () => {


  const [favorites, setPokemonsFavorites] = useState<string[]>([]);

  useEffect(() => {
    setPokemonsFavorites(localStorageFavorites.pokemonsFavorites())
  }, [])
  


  return (
   <MainLayout title="Favorites">
     {favorites.length === 0 ?
     <NoFavorites/> : 
      <FavoritesPokemon pokemons={favorites}/>
      }
   </MainLayout>
  )
}


export default FavoritesPage;