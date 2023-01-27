function solution(n) {
    let answer = []
    let A = n.toString().split('')
    let Arr = A.map(x =>parseInt(x))
    for (i=Arr.length-1; i>=0; i--) {
        answer.push(A[i])
    } return answer.map(x=>parseInt(x))
}


// 숫자를 문자열로
// 문자열을 스플릿 한 뒤 다시 숫자화 