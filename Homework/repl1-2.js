let greatMovie = {
    nameOfMovie : 'DodgeBall: a True Underdog Story',
    runTime: '93',
    characters: [{charOne : { name: 'Peter Lafleur', age: 33, items: ['Average Joes Gym', 'Nothing'] }}, 
        {charTwo: { name: 'White Goodman', age: 32, items: ['Globo Gym', 'Everything'] }}],
    genre: 'Sports with a little bit of drama'
}

console.log(greatMovie.nameOfMovie);
console.log(greatMovie.runTime);
console.log(greatMovie.characters);
console.log(greatMovie.characters[0].charOne.name);
console.log(greatMovie.characters[1].charTwo.items[0]);