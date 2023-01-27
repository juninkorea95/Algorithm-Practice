const solution = function(arr) {
    let A = Math.min(...arr)
    arr.splice(arr.indexOf(A),1)
    arr.length <= 1 ? answer =[-1] : answer = arr
    
    return answer
}

// splice 하여 최솟값의 인덱스를 찾아내어 한개만 잘라낸다. 
// 마지막 삼항연산자 설명이 이해가 안됨..