const API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random";
const botonCuriousFact = document.getElementById("btnFact");
const factText = document.getElementById("fact-text");

let datoActual = "";
let favoritos = [];
const btnAddFavorite = document.querySelector(".add-favorite");
const btnFavorites = document.querySelector(".favorites");
const listaFavorites = document.getElementById("favorites-list");

async function cargarInformacion() {
  const response = await fetch(API_URL);
  const dato = await response.json();
  console.log(dato);

  datoActual = dato.text;
  factText.textContent = datoActual;
}

function addFavorites() {
  for (let i = 0; i < favoritos.length; i++) {
    if (datoActual === favoritos[i]) {
      return;
    }
  }
  favoritos.push(datoActual);
  console.log("Favoritos ahora:", favoritos);
}

function mostrarFavorites() {
  listaFavorites.innerHTML = "";

  for (let i = 0; i < favoritos.length; i++) {
    const li = document.createElement("li");
    li.textContent = favoritos[i];
    listaFavorites.appendChild(li);
  }
}

botonCuriousFact.addEventListener("click", cargarInformacion);
btnAddFavorite.addEventListener("click", addFavorites);
btnFavorites.addEventListener("click", mostrarFavorites);
