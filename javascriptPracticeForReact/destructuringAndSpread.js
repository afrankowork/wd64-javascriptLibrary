const array = ['thing', 42, false, {key: 'value'}, [1,2,3,4,undefined], NaN]

let[string, num,, obj,, nan] = array;
console.log(string, num, obj, nan);

const testObj = {
    testString: 'stringy thingy',
    testNum: 23,
    testBool: true,
    testObject: {key: 'waluigi'},
    testArr: [1,2,3,4, undefined],
    testNan: NaN
}

let {testString, testNum, testBool, testObject, testArr, testNan} = testObj;

let newObj = {newString: 'more strings', anotherString: 'this is a string', ...testObj};
console.log(newObj);