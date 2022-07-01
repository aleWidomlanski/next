const toggleFavorite = (id: string) => {
  console.log("toggleFavorite LLamado");

  console.log(localStorage.getItem("favorites"));

  let favorites: string[] = JSON.parse(
    //forma de decirle que si no encuentra nada en el localstorage con el nombre favorites devuelva un array de string vacìo
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    return favorites;
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export default {
  toggleFavorite,
};
