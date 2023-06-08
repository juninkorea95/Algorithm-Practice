// function solution(k, score) {
//     let stack = [];
//     let result = [];
    
//     for (let i =0; i < k; i++) {
//         stack.push(score[i])
//         result.push(Math.min(...stack))
//     }
    
//     for (let i = k; i < score.length; i++) {
//             stack.push(score[i])
//             stack.splice(stack.indexOf(Math.min(...stack)),1)
//             result.push(Math.min(...stack))
//     }
//     return result
// }

function solution(k, score) {

    const result = score.reduce((result, score) => {
        result.honors.push(score)
        if (result.honors.length > k) {
            result.honors = result.honors.sort((a, b) => b - a)
            result.honors.pop()
        }
        result.losers.push(Math.min(...result.honors))
        return result
    }, { honors: [], losers: [] })

    return result.losers
}