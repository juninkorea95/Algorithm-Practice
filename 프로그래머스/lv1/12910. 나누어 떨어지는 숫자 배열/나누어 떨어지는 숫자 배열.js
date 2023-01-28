// function solution(arr, divisor) {
//     let Arr = arr.sort((a,b) => a-b)
//     let Answer = arr.filter (x => (x % divisor ===0))
//     if (Answer.length == 0) {
//         Answer.push(-1)
//     } return Answer
// }


// sort를 이용해 오름차순 정렬
// filter 사용해 divisor로 나누어지는 애만 거르기
// 배열 길이가 0인 놈은 Answer에 -1 푸시 
// Answer 리턴 


function solution(arr, divisor) {

    let answer = [];
    let answer1

    for (let i =0; i < arr.length; i++) {
        (arr[i]%divisor===0) ? answer.push(arr[i]) : []
    } 
    if (answer.length === 0) {
        answer.push(-1)
    }
        return answer.sort((a,b) =>a-b)
}





