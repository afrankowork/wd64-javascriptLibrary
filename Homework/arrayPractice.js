//how to get last element in array, or given n(a number) get the last memebers of the lsit
function last(arr, n) {
    if (n == null) {
        let last = arr[arr.length-1]
        
        return last
    } else {
        return arr.slice(Math.max(arr.length-n,0));
}
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

//Join elements of array into string

function myColor(colors) {
    return colors.join('+');
    
}

console.log(myColor(["Red", "Green", "White", "Black"]));

//Accepts a number as input and inserts dashes between each two even numbers

