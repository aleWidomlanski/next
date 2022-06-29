import type { NextPage,  GetStaticProps  } from 'next'
import { Button } from '@nextui-org/react'
import { MainLayout } from '../components/layouts';
//debo llamarlo así porque en esta dirección ya no está como default sino exportada normalmente
import {pokeApi} from '../api';
import { PokemonListResponse } from '../interfaces';


//puedo ponerlo como FC también
const HomePage: NextPage = (props) => {

  console.log(props)

  return (
    <MainLayout title='Lista de Pokemones'>
      <Button color='gradient'>Hola Mundo</Button>
    </MainLayout>
  )
}


//esta función se ejecuta cuando se hace el build 
//se ejecuta del lado del servidor, lo único que puedo pasar al cliente (front) son las props
//se usa solo en las pages

export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');


  return {
    props: {
      pokemons: data.results
    }
  }
}

export default HomePage;
