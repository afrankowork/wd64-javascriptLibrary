let starWarsPeopleList = document.querySelector('ul');

let swapi = 'https://swapi.dev/api/planets';




// fetch(swapi)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(json) {
//         let people = json.results;
    

//     for(p of people) {
//         let listItem = document.createElement('li');
//         listItem.innerHTML = '<p>' + p.name + '</p>';
//         starWarsPeopleList.appendChild(listItem);
//     }
// });

    fetch(swapi)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            let planet = json.results;
            console.log(planet);
        
        for (p of planet) {
            let newItem = document.createElement('li')
            newItem.innerHTML = '<p>' + p.name + '</p>';
            starWarsPeopleList.appendChild(newItem);
        }
        
        
        });



