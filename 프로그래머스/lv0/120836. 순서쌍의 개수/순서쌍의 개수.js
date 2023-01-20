function solution(n) {
    let count = 0;
    for (let i=1; i <= n; i++) {
        if (n % i ===0) {
            count += 1
        }
    } return count
}

// 1부터 for문을 돌려 나머지가 0인 수를 찾는다. 
// 제곱근보다 작은수 까지 돌린다. 
// 제곱근까지 반복문 돌려서 나온 숫자 X2
// 제곱근도 해당된다면 +1 아님 말고 
