// POKEDEX PROGRAM

function fetchData(){
    const pokemonName = document.querySelector("#pokemonName").value.toLowerCase();
    const errorMessage = document.querySelector("#errorMessage");

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok){
                throw new Error("Could not fetch resource");
            } return response.json();
        })
        .then(data => {
            
            const pokemonSprite = data.sprites.front_default; 
            const imgElement = document.querySelector("#pokemonSprite");

            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        })
        .catch(error => {
            console.log(error);

            if (error.id === undefined){
                errorMessage.textContent = "Esse pokémon não existe."
            }
        });
}

function tryToDisableErrorMessage(){
    if (errorMessage.textContent !== ""){
        errorMessage.textContent = "";
        pokemonName.value = "";
    }
}