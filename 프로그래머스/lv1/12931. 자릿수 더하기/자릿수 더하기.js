const solution = function(N) {
    let result = 0;
    let Arr = N.toString().split('')
    let newArr = Arr.map(x => parseInt(x))
    for (element of newArr) {
        result += element
    } return result 
}

// 그냥 숫자이므로 일단 숫자 자리수의 배열로 찢어놔야한다.
// 일단 찢어놓을 수 있게 문자열로 바꾸고 찢는다.
// 찢어놓은 배열 원소는 다 문자열이므로, 숫자로 바꿔준다. 
// for문으로 원소 돌면서 더해주면 끝! 