function solution(arr) {
    let answer = []
    let A = Math.min(...arr)
    
    for (i=0; i<=arr.length; i++) {
        if (arr[i] === A) {
            delete arr[i]
        }
    } 
     answer =  arr.filter(v=>v)
    return answer.length === 0 ? [-1] : answer;
}    

// splice 하여 최솟값의 인덱스를 찾아내어 한개만 잘라낸다. 
// 마지막 삼항연산자 설명이 이해가 안됨..