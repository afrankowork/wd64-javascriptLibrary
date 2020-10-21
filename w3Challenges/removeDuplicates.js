function removeDuplicates(num) {
    let x;
    const len=num.length;
    const out=[];
    const obj={};
  
    for (x=0; x<len; x++) {
      obj[num[x]]=0;
      console.log(obj);
    }
    for (x in obj) {
      out.push(x);
      
    }
    return out;
  }
  const Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
  result = removeDuplicates(Mynum);
  console.log(Mynum);
  console.log(result);