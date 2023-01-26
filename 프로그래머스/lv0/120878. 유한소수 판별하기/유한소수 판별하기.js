function solution(a, b) {
    let A = 1;
    for (let i=1; i<=Math.min(a,b); i++) {
        if (a % i ===0 && b % i ===0) 
            A = i
    } 
    let N = b / A
    
    while (N%2 ===0) N = N/2
    while (N%5===0) N = N/5
    
    return N === 1 ? 1 : 2
} 

// 1. for문 돌려서 최대공약수 구하기 
// 2. 최대공약수로 분모를 나눠서 기약분수의 분모 도출 
// 3. while 문으로 2로 나눠보고 5로 나눠보고 해서 1만 남는지 아닌지만 점검 
// 5. 1 남으면 유한소수 , 아니면 무한소수 
    