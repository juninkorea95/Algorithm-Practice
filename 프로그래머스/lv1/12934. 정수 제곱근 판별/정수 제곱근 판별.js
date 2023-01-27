function solution(n) {
    let A = Math.sqrt(n)
    if (A === Math.floor(A)) {
        return (A+1) ** 2
    } return -1
}

// 제곱근 메소드를 사용하여 변수 하나 만들기
// 제곱근 === 제곱근 소수 버린놈 일 경우엔 제곱근이 양의 정수라는 뜻이 된다. 
// 제곱근에 1 더해서 제곱한 값 리턴
// 위에 조건 안맞으면 그냥 -1 리턴 

