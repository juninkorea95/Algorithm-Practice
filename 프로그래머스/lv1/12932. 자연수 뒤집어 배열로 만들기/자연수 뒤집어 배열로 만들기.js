function solution(n) {
    let answer = []
    let A = n.toString().split('')
    let Arr = A.map(x =>parseInt(x))
    for (i=Arr.length-1; i>=0; i--) {
        answer.push(A[i])
    } return answer.map(x=>parseInt(x))
}

// 숫자를 문자열화 시켜서 스플릿
// 문자화된 요소를 다시 parseInt로 숫자로 돌려놓음
// 역for문 적용하여 Arr 끝 요소를 answer의 첫 요소로 들어가게끔 설정
// 근데 돌려보니 answer의 요소가 문자처럼 나옴..(왜?!?!)
// 그래서 map으로 각 요소를 숫자취급을 다시 해줌 parseInt로
// 답이 나오긴 했는데 마지막 부분에 왜 요소가 문자로 나왔을까..몰름ㅋㅋ