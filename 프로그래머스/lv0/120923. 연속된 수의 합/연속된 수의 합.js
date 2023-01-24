function solution(num, total) {
    let A = []
    let a = (total / num) - ((num-1) / 2)
    let b = Math.round((total / num) - (num / 2))
    if (num % 2 === 1) {
       for (let i=a; i<a+num; i++) {
           A.push(i)
       } 
    } else {
        for (let i=b; i<b+num; i++) {
            A.push(i)
        }
    } return A
}


// 처음값 = total / num - (num-1) / 2 -- 홀수 배열 
// 처음값 = Math.round(total / num - (num/2))




