// DOM Objects
const pokeName = document.getElementById('poke-name');
const pokeId = document.getElementById('id-num');
const pokeTypeOne = document.getElementById('type-one');
const pokeTypeTwo = document.getElementById('type-two');
const pokeWeight = document.getElementById('poke-weight');
const pokeHeight = document.getElementById('poke-height');
const frontImage = document.getElementById('front-image');
const backImage = document.getElementById('back-image');

function getPokemon() {
  let randomNum = Math.floor(Math.random() * 897 + 1);
  fetch('https://pokeapi.co/api/v2/pokemon/' + randomNum)
  .then(res => res.json())
  .then(data => {
    pokeName.innerHTML = data['name'];
    pokeId.innerHTML = data['id'];
    pokeWeight.innerHTML = data['weight'];
    pokeHeight.innerHTML = data['height'];
    const pokeTypes = data['types'];
    const pokeFirstType = pokeTypes[0];
    const pokeSecondType = pokeTypes[1];
    pokeTypeOne.innerHTML = pokeTypes[0]['type']['name'];
    if (pokeSecondType) {
      pokeTypeTwo.innerHTML = pokeTypes[1]['type']['name'];
    } else {
      pokeTypeTwo.innerHTML = 'none';
    }
    frontImage.src = data['sprites']['front_default'];
    backImage.src = data['sprites']['back_default'];
  })
}

getPokemon();