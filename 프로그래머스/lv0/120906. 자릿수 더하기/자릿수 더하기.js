function solution(n) {
    let answer=0;
    let m = String(n);
    
    for (let i=0; i < m.length; i++) {
        answer += parseInt(m[i])
    } return answer
}

// 숫자를 문자열값으로 바꾼다
// answer =0; 값을 미리 만들어놓는다. 
// for문 돌려서 문자열의 첫번째열부터 마지막열까지 더한다.
// 더하는 값을 answer에 반영한다. 


    
    