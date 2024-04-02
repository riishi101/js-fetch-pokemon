// Fetch data from an API

// fetch = Function used for making HTTP requests to fetch resources.
//    (JSON style data, images, files)
//    Simplifies asynchronous data fetching in JavaScript and used
//    for interacting with API's to retrieve and send data
//    asynchronously over the web.
//    fetch(url, {options})
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
*/
//async to fetch data

//fetchData();

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resources");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
    //console.log(data);
  } catch (error) {
    console.error(error);
  }
}
