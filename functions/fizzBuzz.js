let fb = null;

let i = 1;

for(i;i<=100;i++){
    
    i % 3 == 0 && i % 5 == 0 ? fb = 'Fizz Buzz' : 
    i % 3 == 0 ? fb = 'Fizz' : 
    i % 5 == 0 ? fb = 'Buzz' : 
    fb = '';
    console.log(i, fb)
}

for(let fb = 1; fb <= 100; fb++) {
    let fizz = fb%3 == 0;
    let buzz = fb%5 == 0;
    console.log(fizz ? (buzz ? 'Fizz Buzz' : 'Fizz') : (buzz ? "Buzz" : fb) )
}