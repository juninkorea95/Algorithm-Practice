function solution(n) {
    let arr =[];
    for (i=1; i <= n; i++) {
        if (n % i ===0) {
            arr.push(i)
        }
    } return arr
}

// 1. 빈 배열을 만든다.
// 2. 1부터 n까지 반복문 돌려서 n에서 i를 나눴을 때 나머지가 0일 때 i 값을 빈배열 arr에 추가한다. 끝