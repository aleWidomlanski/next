import axios from 'axios';

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});



export default pokeApi;
//se recomienda exportar por default instancias de axios
