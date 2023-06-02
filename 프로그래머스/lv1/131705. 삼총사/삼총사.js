function solution(number) {
    let result = 0
    for (let i=0; i <= number.length -1; i++) {
        for (let j = 0; j <= number.length -1; j++) {
            for (let k=0; k<= number.length-1; k++) {
                if (i < j && j < k && (number[i] + number[j] + number[k] === 0)) {
                   result += 1 
                    } 
            }
        }
    }
    return result
}