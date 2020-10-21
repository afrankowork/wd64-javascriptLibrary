let arr = [6,4,0, 3,-2,1];
let min = arr[0];
let max = arr[0];
let pos;
let sortArr = [];

for (let i = 0; i<arr.length; i++) {
    if (max<arr[i]) {
        max = arr[i]
        
    }
}


for (let j=0;j<arr.length; j++) {

    for (let k=0;k<arr.length; k++) {
        if(arr[k] == 'x') {
            continue
        } 
        if (min>arr[k]) {
            min = arr[k]
            pos = [k];
        }
    }
    sortArr.push(min);
    min = max;
    arr[pos] = 'x';
    
    
    
}

console.log(sortArr);