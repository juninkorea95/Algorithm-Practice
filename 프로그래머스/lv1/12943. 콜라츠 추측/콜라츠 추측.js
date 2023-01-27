function solution(num) {
    let answer = 0;
    
    for (let i=0; i< 500; i++) {
        if (num !== 1) {
            num = num % 2 === 0 ? num /2 : 3 * num + 1 
        } else {
            return answer = i
        }
    } return answer = -1 
}

// 500번 돌려서 안나오는 애는 -1 이 나오므로 반복문의 제한을 500 아래로 두고 시작할 수 있다. 
// answer을 0으로 두고 시작
// 500까지 반복문을 돌리는데 처음 조건문 설정이 잘못되었다. -> n이 홀수인지 짝수인지를 묻는 게 아니라 1(종착지)인지를 물어봐야 한다. 
// 아니라면 그 뒤에 짝수면 나누기 2, 홀수면 곱하기 3 더하기 1을 적용한다. 
// answer는 반복문이 시행된 횟수 i 로 리턴한다. 
// 500번 해도 1이 안나오면 -1을 answer로 리턴 

