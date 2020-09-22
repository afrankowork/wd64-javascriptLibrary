let url = 'https://rickandmortyapi.com/api/character/'

function rickAndMorty() {
    fetch(url).then(results => {
        console.log(results);
    } )
}

rickAndMorty();