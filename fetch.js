const fetchBtn = document.getElementById('fetchBtn');


fetchBtn.addEventListener('click', async() => {

  try{
  const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
  const pokemonSprite = document.getElementById('pokemonSprite');

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  if(!data.ok){
      throw new Error("This is a error");
  }
  const datas = await data.json();
  const sprite = datas.sprites.front_default;
  pokemonSprite.src = sprite;
  pokemonSprite.style.display = 'block';
  }
  catch(error){
      console.error(error);
  }
}
);
