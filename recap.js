

 maxChar=(str) =>{
    const map = {};
  let max = 0;
  let maxChar = '';

  
  for (let char of str) {
    if (map[char]) {  
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  for (let char in map) {
    if (map[char] > max) {
      max = map[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChar('abcccccccd'));


function getCharMap(str) {
    let map={}

    for (let char of str) {
        map[char]=map[char]+1 || 1
    }
    return map
}
function anagram(str1, str2) {
    let map1=getCharMap(str1);
    let map2=getCharMap(str2);

    for (let char in map1) {
      
     if(map1[char]!==map2[char]) {
         return false
     }    
}
return true
   
}

 anagram2 =() =>{
   let str ='listen' 
   let arr=['elists', 'google', 'inlets', 'banana'];
   arr.forEach(element => {
      
       if(anagram(str, element)==true) {
         console.log(element)
       } 

   });
   
}

console.log(anagram2())

polindrome =(str)=> {
    let reverse = str.split('').reverse().join('');
    return reverse===str;
}

console.log(polindrome('abba'))

reverseInt = (num)=> {
    let rev= num.toString().split('').reverse().join('')
    return parseInt(rev)
}
console.log(reverseInt(51))

steps=(num)=> {
    let i=1;
   while (num>=i) {
       console.log('#'.repeat(i)+' '.repeat(num-1))
       i++;
   }
}
steps(4)

reverseStr =(str)=> {
    return str.split('').reverse().join('');
}
console.log(reverseStr('str'))


 function chunk(array, size) {
    const chunked_arr = [];
    let i = 0;
    while (i < array.length) {
      chunked_arr.push(array.slice(i, size + i));
      i += size;
    }
    return chunked_arr;
  }

  console.log(chunk([1,2,3,4,5,6], 2))



 
  
  function matrix(number) {
  
    let result = [];
    for (let i = 0; i < number; i++) {
        result.push([])
    }

    let count = 1;
    let startCol = 0;
    let endCol = number - 1;
    let startRow = 0;
    let endRow = number - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = count;
            count++;
        }
        startRow++;
        for (let i = startRow; i<= endRow; i++) {
            result[i][endCol] = count;
            count++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = count;
            count++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = count;
            count++;
        }

        startCol++;

    }

    console.log( result);
   

}

matrix(4)

