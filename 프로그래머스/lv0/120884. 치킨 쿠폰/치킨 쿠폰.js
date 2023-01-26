function solution(chicken) {
  let answer=0;
    
    while (chicken > 9) {
        answer += Math.floor(chicken / 10)
        chicken = Math.floor((chicken / 10) + (chicken % 10))
    } return answer
}

// 치킨 나누기 10과 치킨을 10으로 나누었을 때의 나머지를 더해서 그 다음 쿠폰수를 환산하는 아이디어 
// 변수를 쿠폰이라고 했으면 더 알아보기 쉬웠을듯 