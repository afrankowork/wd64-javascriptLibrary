const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics', medals: 7},
    { name: 'Kenn', specialty: 'Norse Mythology', medals: 5},
    {name: 'Paul', specialty: 'Tuvan throat singing', medals: 8},
    {name: 'Aaron', specialty: 'Entomology', medals: 4},
    {name: 'Carolyn', specialty: 'Kung Fu', medals: 3}
]

const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);

const instructorInfo = instructors.filter(instructor => instructor.name == 'Aaron');
console.log(instructorInfo);