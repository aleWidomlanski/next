const toggleFavorite = (id: string) => {
  let favorites: string[] = JSON.parse(
    //forma de decirle que si no encuentra nada en el localstorage con el nombre favorites devuelva un array de string vacìo
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((e) => {
      return e !== id
    });
  } else {
    favorites.push(id);
  }
  return localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existPokemonInFavorites = (id: string): boolean => {
  const favorites: string[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites.includes(id)
}


export default {
  toggleFavorite,
  existPokemonInFavorites
};
