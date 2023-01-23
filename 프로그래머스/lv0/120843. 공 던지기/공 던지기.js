function solution(numbers, k) {
    let ansIndex = 0;
    
    for(let i = 0; i < k; i++){
        ansIndex += 2;    
        
        if(ansIndex > numbers.length){
            ansIndex -= numbers.length;
        }
    }
    
    return numbers[ansIndex - 2];
}

// 배열이 짝수개라면
// 1,3,1,3,1,3 이 반복되는 배열이 된다. 
// 배열이 홀수개라면
// 1 3 5 .. n-1 , 2,4,6,8,...n 의 배열이 된다. 