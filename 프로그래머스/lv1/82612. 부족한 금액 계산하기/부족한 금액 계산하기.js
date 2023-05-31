function solution(price, money, count) {
   let sum = 0;
    for (let i =1; i <= count; i++) {
       sum += i
   }
    let answer = price * sum - money
    if (answer >= 0) {
        return answer 
    } else {
        return 0
    }
}