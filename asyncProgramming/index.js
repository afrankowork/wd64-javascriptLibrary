let url = 'https://rickandmortyapi.com/api/character/';

function fetchRicknMorty(){
    
    fetch(url).then(results => {
        
        return results.json()
    })
    .then(json => {
      showMeMorty(json);
    })
  }

function showCharacters (data) {

    

}



