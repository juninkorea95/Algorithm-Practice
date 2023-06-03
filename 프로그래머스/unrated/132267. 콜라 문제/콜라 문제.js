function solution(a, b, n) {
    
    let bonusBottle = 0;
    
    while (n >= a) {
        bonusBottle += Math.floor(n/a) * b
        n = Math.floor(n/a) * b + (n%a)
    }
    
    return bonusBottle
    
}


// 1. n을 a로 나눈다. 
// 2. 나눈 몫을 b로 곱한다. -> 새로운 값 result에 추가 
// 3. 나눈 몫 + n/a 나머지 값을 다시 a로 나눈다. 
// 4. 나눈 몫을 b로 곱한다. -> 새로운 값 result에 추가
// 5. 나눈 몫 + 나머지값 다시 a로 나눈다. 
