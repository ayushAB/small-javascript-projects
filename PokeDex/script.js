const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const Total_Pokemons = 151;
const pokemons_container = document.createElement('div');
pokemons_container.className = 'grid sm:grid-cols-3 gap-3 max-w-7xl z-10';
const colors = {
  fire: 'linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)',
  grass: 'linear-gradient(315deg, #20bf55 0%, #01baef 74%)',
  electric: 'linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)',
  water: 'linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)',
  ground: 'linear-gradient(315deg, #f39f86 0%, #f9d976 74%)',
  rock: 'linear-gradient(315deg, #772f1a 0%, #f2a65a 74%)',
  fairy: 'linear-gradient(315deg, #fc5296 0%, #f67062 74%)',
  poison: 'linear-gradient(315deg, #f8ceec 0%, #a88beb 74%)',
  bug: 'linear-gradient(315deg, #ffac81 0%, #ff928b 74%)',
  dragon: 'linear-gradient(315deg, #36096d 0%, #37d5d6 74%)',
  psychic: 'linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)',
  flying: 'linear-gradient(315deg, #f8ceec 0%, #a88beb 74%)',
  fighting: 'linear-gradient(315deg, #ffa69e 0%, #5d4954 74%)',
  normal: 'linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)'
};
const main_types = Object.keys(colors);

async function getPokemByID(id) {
  const res = await fetch(API_URL + id);
  const pokemon_data = res.json();
  //console.log(pokemon_data);
  return pokemon_data;
}
getAllPokemons();

async function getAllPokemons() {
  document.body.appendChild(pokemons_container);
  for (let index = 1; index <= Total_Pokemons; index++) {
    const pokemon = await getPokemByID(index);
    createPokemonCard(pokemon);
  }

}

function createPokemonCard(pokemon_res) {
  //console.log(pokemon_res);
  const pokemon_div = document.createElement('div');
  const poke_types = pokemon_res.types.map(type => type.type.name);
  const type = main_types.find(type => poke_types.indexOf(type) > -1);
  const color = colors[type];
  pokemon_div.style.background = color;
  pokemon_div.className = 'relative flex flex-col  tems-center rounded-lg shadow-2xl';
  pokemon_div.innerHTML = `
          <div class="overflow-hidden h-48 w-48 m-4 flex justify-center p-5">
            <div class="w-40 h-40 rounded-full opacity-30 bg-white absolute"></div>
            <img class="object-contain z-10" src="${pokemon_res.sprites.other.dream_world.front_default}" class=""/>
          </div>
          <div class="text-lg text-center text-white capitalize w-full mb-3 bg-black">
          ${pokemon_res.name}
          </div>
          <div class="text-lg text-center text-white capitalize w-full mb-3">
           Weight : ${pokemon_res.weight}
          </div>
          <div class="h-5 w-5 text-center text-white absolute left-3 top-1 ">
          #${pokemon_res.id
            .toString()
            .padStart(3, '0')}</div>
          <img class="absolute h-5 w-5 top-1 right-2 animate-spin" src="pokeball.png" alt="">
            ${
              createtypeTag(pokemon_res.types,colors[type])
            }
    `;
  pokemons_container.appendChild(pokemon_div);
}

function createtypeTag(typ, col) {
  const mainTypeDiv = document.createElement('div');
  mainTypeDiv.className="w-full flex justify-evenly mb-5";
  for (let index = 0; index < typ.length; index++) {
    const typeDiv = document.createElement('div');
    typeDiv.className = 'text-white text-center shadow rounded-xl px-3 capitalize';
    typeDiv.style.background = col;
    typeDiv.innerText = typ[index].type.name;
    mainTypeDiv.appendChild(typeDiv);
  }
  return mainTypeDiv.outerHTML;
}