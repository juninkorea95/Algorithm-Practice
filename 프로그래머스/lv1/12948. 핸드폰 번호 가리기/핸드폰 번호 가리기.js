function solution(phone_number) {

    const last4Digits = phone_number.slice(-4);
    const maskedNumber = last4Digits.padStart(phone_number.length, '*');
    
    return maskedNumber
}

// let numLength = phone_number.length
    
//     let num = []
    
//     for (let i = numLength - 1; i >= numLength-4; i--) {
//     num.push(phone_number[i])
// }
//     let ans2 = num.join('')
    
//     let star = []
    
//     for (let i= numLength-5; i >= 0; i--) {
//         star.push('*')
//     }
    
//     let ans1 = star.join('')
    
//     let answer = ans1 + ans2
    
//     return answer.toString()