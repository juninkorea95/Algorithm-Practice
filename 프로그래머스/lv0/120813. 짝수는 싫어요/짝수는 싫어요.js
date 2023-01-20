function solution(n) {
    let numbers = Array.from({length:n}, (_,index) => index + 1)
    return numbers.filter(num => num % 2 === 1)
}