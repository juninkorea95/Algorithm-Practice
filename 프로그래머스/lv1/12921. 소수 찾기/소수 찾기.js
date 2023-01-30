// 1번 풀이) 시간초과

// function solution(n) {
//     let answer = 0;
//     for (let i=2; i <= n; i++) {
//         if (test(i)) {
//             answer++
//         }
//     } return answer
// }

// function test(x) {
//     let prac = [];
//     for (i=2; i < x; i++) {
//         if (x % i == 0) {
//             prac.push(i)
//         } 
//     } if(prac.length === 0) return true
// } 

// 2번 풀이 ) 모르겠음...

// function solution(n) {
//     let answer = 0;
//     const arr = new Array(n+1).fill(true);
//     // console.log(new Array(n+1))  
//     // console.log(arr)
    
//     for(let i = 2; i <= n; ++i){
//         // 이미 소수가 아닌 인덱스는 건너뛴다.
//         if(arr[i] === false){
//             continue; 
//         }
//         // 배수는 소수가 아니라 0으로 설정
//         for(let k = i * 2; k <= n; k += i){
//             arr[k] = false;
//         }
//     }
//     // 소수의 갯수를 구한다.
//     for(let i = 2; i <= n; ++i){
//         if(arr[i] === true){
//             answer++;
//         }
//     }
//     return answer;
// }

// 3번 풀이 

function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}
