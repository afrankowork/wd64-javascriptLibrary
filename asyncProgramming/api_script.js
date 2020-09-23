//console.log('Test');

const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

//eventListener
searchForm.addEventListener('submit', fetchSpace);


//FETCH FUNCTION
function fetchSpace(e) {
    e.preventDefault(); // this method allows us to cancel a default action by the browser. With this example we are forcing the page to not refresh as it normally woudl when the submit button is clicked
    
    //console.log('Clicked!');

    fetch(baseURL) // starts the process of fetching from our resource
        .then(results => {
            //console.log(results) // show our response
            return results.json() // This method takes in a response
            //(results), reads to completion and returns the results as a json format
        })
        .then(json => {
            //console.log(json)
            displayRockets(json);
        })
}


// DISPLAY FUNCTION
function displayRockets(data) {
    // console.log('DisplayRocket:', data);

    let rockets = data.forEach(r => {
        console.log(r);
        let rocket = document.createElement('li'); // create a li tag
        // rocket.innerText = r.name;
        rocket.innerText = `${r.name} is in the country ${r.country}`;
        spaceShips.appendChild(rocket);  
    });

}

//Example from async to show how js reads scripts without promises

// function callbackFunction(){
//     for(let i = 0; i < 100; i++){
//         console.log(i)
//     }

//      const data = {
//         name: 'Ralf Machio', 
//         age: 66, 
//         occupation: 'kickboxing'
//     }
//     return data;
// }

// function showData(dataFromFunction){
//     return "hello " + dataFromFunction.name
// }

// console.log(
//     showData(callbackFunction())
// )


// // Boolean declaration 
var amIGood = true;

// Promise 
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift) // fulfilled 
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); // rejected
        }
    }
);

// Promise call 
var checkTwice = function () {
    iCanHasGift
        .then(function (fulfilled) {
            // nice list = gift
            console.log(fulfilled);
        // output: { brand: 'HasMattelbro', item: 'Turbo-Man action figure'} 
        })
        .catch(function (error) {
            // naughty list = coal
            console.log(error);
        // output: "You've made Santa's naughty list; enjoy your coal!"
        });
};

checkTwice();


// 2nd promise
var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

            resolve(message); 
        }
    );
};

// Promise call
var checkTwice = function () {
    console.log('before Christmas'); // log before
    iCanHasGift
        .then(playDate)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error)
        });
    console.log('after opening gifts'); // log after
}

checkTwice()