const pokemonList = document.getElementById('pokemonList')
const especifica = document.getElementsByClassName('especifica')


const maxRecords = 151
let offset = 0
const limit = 1

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => ` 
        <li class="pokemon ${pokemon.type}">
            <span class="name">${pokemon.name}</span>
            <span class="number">#00${pokemon.number}</span>
    
            <div class="detail">
                <ol class="types">
                   ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
    
            <img src="${pokemon.photo}"
                alt="${pokemon.name}">
            </div>
       </li> 

       
      
        <div class="detalPoke">
           <span class="about">About</span> <br/>
                <div class="informacao">               
                    <ol class="infoPoke"> 
                        <li>Specie</li>
                        <li>Height</li> 
                        <li>Weight</li>
                        <li>Abilities</li>
                </ol>
                    <ol class="resPoke">
                        <li>Seed</li>
                        <li>${pokemon.height}0cm</li> 
                        <li>${pokemon.weight} kg</li>
                        ${pokemon.abilities.map((ability) => `<li${ability}">${ability} </li>`).join('')}
                    </ol>
               </div>
        
       
   
       
            <span class="about">Breeding</span>
                <div class="informacao">
                    <ol class="infoPoke"> 
                        
                        <li>Gender</li> 
                        <li>Egg Groups</li>
                        <li>Egg Cycle</li>
                    </ol>
                    <ol class="resPoke">
                        <li>87,5% / 12.5% </li>
                        <li>Monster</li> 
                        <li>Grass</li>
                    </ol>
                </div>       
                   
        </div>   
  

       `).join('')

        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

