function solution(numbers) {
    let A = ["zero", "one", "two", "three", "four", "five", "six","seven","eight","nine"]
    for (let i=0; i<A.length; i++) {
        numbers = numbers.split(A[i]).join(i)
    } return +numbers
}









// function solution(numbers) {
//     const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
//     for(let i = 0 ; i<number.length; i++){
//         numbers = numbers.split(number[i]).join(i)
//     }
//     return +numbers
// }