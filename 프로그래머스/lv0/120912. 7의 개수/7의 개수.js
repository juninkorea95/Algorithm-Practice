function solution(array) {
    let count = 0;
    let Arr = array.join('')
    let newArr = [...Arr]
    let Answer = newArr.map(x => parseInt(x))
    for (x of Answer) {
        if (x === 7) {
            count++
        }
    } return count 

}

// count = 0; 으로 시작
// 일단 숫자 모은다. 
// 모은거 숫자 하나하나로 나눈 배열 다시 만든다
// 그렇게 만들면 숫자가 문자가 되므로 각 요소가 숫자로 바뀌도록 설정한다 
// for문 돌려서 요소가 7일때마다 count+1 하도록한다
// count 값 리턴 