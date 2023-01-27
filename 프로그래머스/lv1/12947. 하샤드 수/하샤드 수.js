function solution(x) {
    let sum = 0;
    let a = x.toString().split('')
    let A = a.map(x => parseInt(x))
    for (element of A) {
        sum += element
    } 
    if (x % sum === 0) {
        return true
    } return false
}

// 각 자리수 합 나타내는 식을 적용하여 sum을 구한다.
// x와 sum의 나누기 나머지로 tru, false를 구별한다.

// mission : 각 자리수 합을 구하는 더 효율적인 코드는? 