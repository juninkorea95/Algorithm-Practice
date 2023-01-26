function solution(num) {
    if (Math.abs(num) % 2 ===1) {
        return 'Odd'
    } return 'Even'
}

// const solution = function(num) {
//     return (num % 2 ===1) ? 'Odd' : 'Even'
// }

// 1. 선언식으로 작성 , if문으로 2로 나눠 나머지 1이면 Odd 아니면 Even 
// 2. 표현식으로 작성, 삼항연산자로 한문장처리. 