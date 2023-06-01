function solution(arr1, arr2) {
    let Arr = [];
 for (let i = 0; i <= arr1.length -1; i++) {
     Arr.push(arr1[i].map((x,y) => arr1[i][y] + arr2[i][y] ))
 }
    return Arr
}