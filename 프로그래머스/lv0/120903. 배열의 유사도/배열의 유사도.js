function solution(s1, s2) {
    let count = 0;
    for (i=0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            count++
        } 
    }
    return count
}
   
    
     // for문으로 s1의 요소를 돌림
    // 돌릴때 마다 그 요소가 s2에 포함되는지 확인
    // 포함될때마다 count 를 1을 추가하는 식을 세우자.