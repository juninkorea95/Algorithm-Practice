function solution(s) {
    s = s.split(" ")
    // Z가 있다면, 이전것과 같이 삭제
    while(s.includes('Z')) {
        s.splice(s.indexOf('Z')-1,2)
    }
    return s.reduce((a,b) => Number(a)+Number(b), 0)
}

// function solution(s) {
//     let A = s.split(' ')
//     for (let i=0; i < A.length; i++) {
//         if (A[i] === 'Z') {
//             A.splice(i-1,2)
//         }
//     } return A
// }