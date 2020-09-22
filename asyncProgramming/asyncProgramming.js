/* 

? ASYNCHRONOUS PROGRAMMING

    - synchronous programming is code read line by line, how javascript is normally read
    
    - Asynchronous programming allows a program to do more than one thing at a time.
    - Makes it possible to run long-running actions without stopping the program to wait for a response.

    
*/

//? Synchrnous Sample
const secondSync = () => {
    console.log('Second Hello');
}

const firstSync = () => {
    console.log('First Hello');
    secondSync();
    console.log('End');
}

firstSync();

// Above you can see that 'end' can not be logged until the second hello has fully finished running.

// 'First hello' - 'Second Hello' - 'end' 

//? Asynchronous Sample



const networkRequest = () => {
    setTimeout(() => {
        console.log('Async Code')
    }, 2000); // setTimeout has two arguments: callback (our console log), and time measured in ms(milliseconds)
};
console.log('Hello World');
networkRequest();
console.log('The End');



// Event Loop: looks into the call stack and determines if it is empty or not. If empty, it considers if there is any waiting callback that needs to be executed (our console.log('Async Code')).
// In english now, you put lasagna in the oven to cook would you ever just sit there and watch it cook? No, you would go do something else maybe make that gas garlic bread and side salad while its in the oven. Asynchronous is similar as you start the networkRequest and it runs essentially in the background to not delay the synchronous process. So then console.log('the end') will happen once its done it will check back to see if the networkRequest is finished if it is great if not then go complete other task

//! API

/* 

    ? API: Application Program Interface

    - is NOT a database or server.
    - Allows us access point to server
        - comes in the form of ENDPOINTS
        - endpoints directs us to set of data.        
        
    ? REST API
    - Representational State Transfer
        - creates an object of requested data by the client, send values in response to user.
    
    - Methods:
        CRUD
            Create (POST)
            Read (GET)
            Update (PUT)
            Delete (DELETE)

*/

//? FETCH()
/* 

    - the fetch() method is an asynchronous methed. Part of the browser - NOT JS.
    - the fetch() method starts the process of 'fetching' a resource. Will return a promise and respond ONCE that promise is fulfilled.

        Promise:
        - an unknown value when created
        - represents the eventual fulfilled value or rejection(errror)
        *Promises always one of these states:
        1. Pending: Initial state, neither fulfilled or rejected
        2. Fulfilled: meaning the operation completed successfully
        3. Rejected: Meaning the operation failed
*/

