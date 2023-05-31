// function solution(a, b) {
//     let sum = 0;
//     for (let i = 0; i <= a.length -1; i ++) {
//         sum += a[i] * b[i]
//     }
//     return sum 
// }

function solution(a, b) {
    var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
    return answer;
}
