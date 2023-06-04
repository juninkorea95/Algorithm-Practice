function solution(name, yearning, photo) {
   let arr = [];
    for(let i =0; i < photo.length; i++) {
       arr.push(photo[i].filter(x => name.includes(x)))
        for (let j=0; j < arr[i].length; j++) {
            for (let k=0; k < name.length; k++) {
                if (name[k] === arr[i][j]) {
                    arr[i][j] = yearning[k]
                }
            }  
        }
   } 
  let arrSum = arr.map(element => element.length > 0 ? element.reduce((a, b) => a + b) : 0);
    return arrSum
}