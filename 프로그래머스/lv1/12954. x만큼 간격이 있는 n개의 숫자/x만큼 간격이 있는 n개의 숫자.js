function solution(x, n) {
    let answer = [];
    for (let i=0; i <= n-1; i++) {
        answer.push(x + (i * x))
    }
    return answer
}