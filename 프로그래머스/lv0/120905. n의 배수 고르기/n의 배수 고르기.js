function solution(n, numlist) {
    result = [];
    for (let i=0; i < numlist.length; i++) {
        if (numlist[i] % n === 0) {
            result.push(numlist[i])
        }
    } return result
}

// 빈 배열 result를 만든다. 
// for문으로 요소 돌려가면서 numlist의 값을 점검하는데, n으로 나눠떨어지는지를 점검
// 점검을 통과하면 아까 만들어뒀던 result 배열에 요소 추가 끝.