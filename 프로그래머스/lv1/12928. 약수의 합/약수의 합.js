function solution(n) {
    let result = 0;
    let Answer = []
    for (let i=1; i<=n; i++) {
        if (n % i === 0) {
            Answer.push(i)
        }
    }
    for (element of Answer) {
        result += element
    }
    return result 
}