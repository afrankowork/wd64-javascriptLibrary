/**
 * 
 *      ?Array Destructuring
 * 
 *
 *      
 * 
 *      - allows us to unpack values from arrays or properties from objects.
 *      - similar syntax as array literals BUT is on the LEFT side of the assignment operator.
 *          -  This defines what values to unpack.
 *          great for pulling info out of an array/object and assigning that data to it's own variable
 * 
 */


 const boardGames = ['Catan', 'Pandemic', 'Roll Player'];

 //const gameOne = boardGames[0];

 const [gameOne, gameTwo, gameThree] = boardGames;
 console.log(gameOne);
 console.log(gameTwo);
 console.log(gameThree);


 /**
  * 
  * 
  *     - within the brackets (on left of assignment operator), we have our desired variables names. These coiincide with each value within the array
  *     That is in the original variable.
  * 
  */

/**
 * 
 * ?        REST Syntax
 * 
 *      -Rest syntax looks exactly like spready syntax
 *        - spread expands an array into its elemnts
 *        - Rest collects multiple elements and condenses into a single element.
 *        - MUST be the last element defined when using array destructuring.  
 * 
 */

 const hitchHikersGuide = ['Arther Dent', 'Trillian', 'Babel Fish', {day: 'Thursday', answer: 42}];

 let [charOne, charTwo, ...otherInfo] = hitchHikersGuide;
 console.log(charOne);
 console.log(charTwo);
 console.log(otherInfo);
// Using the spread operator syntax like this is known as 'rest' syntax with Array Destructuring. Using it we are packing up the REST of the values into a new array.

hitchHikersGuide.push('Marvin', 'Deep Thought', 'Zaphod Beeblebrox');
[charOne, charTwo, ...otherInfo] = hitchHikersGuide;
console.log(otherInfo);
// Sort of like thinking the ...otherInfo grab the 'rest' or whats left of the items in the array


[charOne, charTwo,,, ...otherInfo] = hitchHikersGuide;
console.log('SKIPPED');
console.log(charOne);
console.log(charTwo);
console.log(otherInfo);
//We place two extra commas after charTwo to indicate to skip elements. Here we are skipping Babel Fish, and the object


/**
 * 
 * ? Object Destructuring
 * 
 */

    // const game = {
    //     title: 'Fallout 76',
    //     developer: 'Bethesda Game Studios',
    //     platforms: [
    //         'PC', 'PS4', 'XboxOne'
    //     ]
    // };

    // const {title, platforms} = game;
    // console.log(`${title} is on ${platforms}`);

    const games = [
        {
            title: 'Fallout 76',
            developer: 'Bethesda Game Studios',
            platforms: [
            'PC', 'PS4', 'XBoxOne'
            ]
        },
        {
            title: 'The Legend of Zelda: Breath of the Wild',
            developer: 'Nintendo',
            platforms: [
            'Nintendo Switch', 'Wii U'
            ]
        },
        {
            title: 'Stardew Valley',
            developer: 'ConcernedApe',
            platforms: [
            'PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintento Switch', 'PSVita', 'iOS', 'Android'
            ]
        },
    ];

    const [{title: titleOne, developer: devOne}, ,{title: titleThree}] = games;
    console.log(titleOne);
    console.log(devOne);
    console.log(titleThree);

    for({title, developer} of games) {
        console.log(`${title} is developed by ${developer}`);

    }

    for ({title, platforms} of games) {
        for (p in platforms) {
            console.log(`${title} is on ${platforms[p]}`);
        }
    }