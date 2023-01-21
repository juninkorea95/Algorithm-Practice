function solution(array) {
    let a = Math.max(...array)
    let b = array.indexOf(a)
    return [a,b]
}