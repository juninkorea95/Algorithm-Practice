function solution(order) {
    let str = String(order)
    let newArr = Array.from(str)
    let Arr = newArr.map(a => parseInt(a))
    
    let answer = 0;
    
    for (i = 0; i < Arr.length; i++) {
        if (Arr[i] === 3) {
            answer++
        }
        if (Arr[i] === 6) {
            answer++
        }
        if (Arr[i] === 9) {
            answer++
        }
    } return answer
}