function solution(n) {
    let answer = []
    let A = n.toString().split('')
    let Arr = A.map(x =>parseInt(x))
    for (i=Arr.length-1; i>=0; i--) {
        answer.push(A[i])
    } return answer.map(x=>parseInt(x))
}