function solution(t, p) {
    let result = 0;
    let arr = [];
    for (let i=0; i <= t.length - p.length; i++) {
       arr.push(t.slice(i,i + p.length))
       }
    let newArr = arr.map(x => Number(x))
    let newP = Number(p)
    
    for (let i =0; i <= newArr.length -1; i++) {
        if (newArr[i] - newP <= 0) {
            result += 1
        }
    }
    return result
   }
   