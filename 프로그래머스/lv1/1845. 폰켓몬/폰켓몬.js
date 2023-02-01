function solution(nums) {
    let pickNum = nums.length / 2 
    
    nums.sort()
    let newNum = [...new Set(nums)]
    
    let options = newNum.length;
    
    return options >= pickNum ? pickNum : options
    
    
}

// 뽑을 수 있는 수는 pickNum = nums.length / 2 로 설정
// 겹치는 원소를 하나만 남겨서 새 배열 newNums 생성 --> 오늘의 TIL, 알고리즘 패턴으로 정리하기 --> 정규식으로 시도하기

// .replace(/\.+/g, ".") --> 요걸로 해보겠다! -> 안됨
// [...new Set()] 적용 --> 성공

// newNums.length >= pickNum -> pickNum 이 정답
// newNums.length < pickNum -> newNums.length가 정답 
