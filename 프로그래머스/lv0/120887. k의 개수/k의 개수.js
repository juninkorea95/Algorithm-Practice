function solution(i, j, k) {
    let count = 0; 
    let Arr = Array.from({length:j-i+1}, (v,index) => i+index)
    let Arr1 = Arr.join('').toString().split('')
    let Arr2 = Arr1.map(a => parseInt(a))
    for (x of Arr2) {
        if (x === k) {
            count++
        }
    } return count;
}

// incldues 써서 포함하는 애들 다 도출 
// 그 숫자로 배열 형성 
// 배열을 붙여서 숫자열을 만든다.
// 그걸 다시 자리수별로 분리해서 배열 형성
// for문 돌려서 해당 숫자 나올때마다 +1 