// function solution(arr) {
//     return arr.filter((v,i) => v !== arr[i+1])
// }

function solution(arr) {
    let A = [];
    for (i=0; i<arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            A.push(arr[i])
        }
    } return A
}