//List all the properties or keys of a object

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

for (key in student) {
    console.log(key);
}

delete student.rollno;
console.log(student);

console.log(Object.keys(student).length);
//To find the length of an object, you can just run a length method on the keys

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

//With objects looks like using the 'normal' for loop is best

for (let i=0; i<library.length; i++) {
    console.log(library[i].author, library[i].readingStatus)
}