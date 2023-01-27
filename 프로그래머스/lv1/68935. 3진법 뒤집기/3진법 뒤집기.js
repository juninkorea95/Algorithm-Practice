function solution(n) {
    let Arr = []
    let A = n.toString(3).split('')
    for (let i=A.length-1; i>=0; i--) {
        Arr.push(A[i])
    }
    let newNum = Arr.join('')
    return parseInt(newNum,3)
}

// 십진수를 삼진수(문자)로 바꾸고 쪼갠다.
// 배열에 역 for문을 적용하여 새 배열에다가 순서를 뒤집은 배열을 만들어줌.
// 조인을 이용해서 다시 문자열로.
// 이 시점에서의 상태 : 3진수로 변환된 상태에서 문자화 하여 순서를 뒤집어놓은 것. (=newNum)
// parseInt(a,b) b진수 상태이지만 문자로 정의되어있는 a를 십진수 숫자로 바꿔줌. 

