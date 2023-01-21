function solution(order) {
    let str = String(order)
    let newArr = Array.from(str)
    let Arr = newArr.map(a => parseInt(a))
    
    let answer = 0;
    
    for (i = 0; i < Arr.length; i++) {
        if (Arr[i] === 3) {
            answer++
        }
        if (Arr[i] === 6) {
            answer++
        }
        if (Arr[i] === 9) {
            answer++
        }
    } return answer
}

// 숫자 -> 문자열 -> 문자열의 배열 -> 숫자의 배열 변환 테크 ㄱㄱ
// for문 돌리면서 3이랑 일치값나오면 +1 / 6이랑 일치값 나와도 +1 / 9랑 일치값 나와도 +1 
// answer도출 
// 좋은 방법은 아님.
// 더 간단하게 쓸 방법 고안해야한다. 