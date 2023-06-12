function solution(k, m, score) {
    var answer = 0;
    let scoreIdx = 0
    score.sort((a,b)=>b-a)
    while(scoreIdx < score.length){
        const newSlice = score.slice(scoreIdx,scoreIdx+m)
        scoreIdx+= m
        if(newSlice.length === m){
            answer += (Math.min(...newSlice) * m)
        }
    }
    return answer;
}