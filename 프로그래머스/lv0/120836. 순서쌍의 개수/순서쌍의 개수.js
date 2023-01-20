function solution(n) {
    let count = 0;
    for (let i=1; i <= n; i++) {
        if (n % i ===0) {
            count += 1
        }
    } return count
}

// count 생성
// 1부터 for문을 돌려 나머지가 0인 수를 찾는다. 
// 하나 찾을때 마다 count +1
