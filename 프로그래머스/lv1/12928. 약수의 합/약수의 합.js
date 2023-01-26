// function solution(n) {
//     let result = 0;
//     let Answer = []
//     for (let i=1; i<=n; i++) {
//         if (n % i === 0) {
//             Answer.push(i)
//         }
//     }
//     for (element of Answer) {
//         result += element
//     }
//     return result 
// }

// 위 풀이는 바보같은 짓이다...배열만들고 거기서 요소 또 뽑아서 더할 필요가 없다..

const solution = function(n) {
    let result = 0;
    for (let i=1; i<=n; i++) {
        if (n % i ===0) {
            result += i
        }
    } return result 
}