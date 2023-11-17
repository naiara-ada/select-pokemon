const buttonGetPokemon = document.getElementById('get-pokemon');
const infoPokemon = document.getElementById('infoPokemon');

//height
//weight
//types[0].type - array
//name
//sprites.other.dream_world.front_default



buttonGetPokemon.addEventListener('click', () => {
    const pokemon = document.getElementById('pokemon-select').value;
    console.log(pokemon);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) 
            .then ((response) => {
            if (!response.ok) {
            throw new Error ('La solicitud no se ha podido realizar');  
        }
            return response.json();
        })
            .then((data) => {
                console.log(data);
                let tipoPokemon =[];
                let abilidadesPokemon=[];
                data.types.forEach(tipo => {
                    tipoPokemon.push(tipo.type.name)
                });
                data.abilities.forEach(abilidad =>{
                    abilidadesPokemon.push(abilidad.ability.name)
                })
                infoPokemon.innerHTML = `
                <img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}"/>
                <p><span>Nombre: </span>${data.name}</p>
                <p><span>Tipo: </span>${tipoPokemon.join(', ')}</p>
                <p><span>Habilidad: </span>${abilidadesPokemon.join(', ')}</p>
                <p><span>Peso: </span>${data.weight}</p>
                <p><span>Altura: </span>${data.height}</p>
                `

            })

    });
