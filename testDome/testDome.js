function filterNumbersFromArray(arr) {
    letters = ['a','b'];
    let numbers = ['0','1','2','3','4','5','6','7','8','9']
    newArray = []
    for (let i = 0; i<arr.length; i++) {
        if(numbers.includes(String(arr[i])) == true) {
            newArray.push(arr[i])
            

        }
    } arr = newArray;
      console.log(arr);
      return arr;
  }
  
  let arr = [1, 'a', 'b', 2];
  filterNumbersFromArray(arr);
  for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);
 