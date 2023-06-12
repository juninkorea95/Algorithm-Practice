// function solution(k, m, score) {
//     var answer = 0;
//     let scoreIdx = 0
//     score.sort((a,b)=>b-a)
//     while(scoreIdx < score.length){
//         const newSlice = score.slice(scoreIdx,scoreIdx+m)
//         scoreIdx+= m
//         if(newSlice.length === m){
//             answer += (Math.min(...newSlice) * m)
//         }
//     }
//     return answer;
// }

function solution(k, m, score) {
    let answer = 0;
    const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
}