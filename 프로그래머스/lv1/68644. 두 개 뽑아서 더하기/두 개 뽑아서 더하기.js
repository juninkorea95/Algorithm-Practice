function solution(numbers) {
    let answer = [];
    for(let i = 0; i<numbers.length; i++){
        for(let j = i; j<numbers.length-1; j++){
            answer.push(numbers[i] + numbers[j+1])
        }
    } return [...new Set(answer)].sort((a,b) => a-b)
}


// 이중 반복문 돌려서 서로 다른 모든 요소 더하게끔 해주고 
// 더한 값을 중복을 빼준다
// 그다음 sort로 오름차순 정리 끝. 