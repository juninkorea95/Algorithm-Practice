function solution(my_string) {
    let newArr = my_string.toLowerCase()
    let Arr = Array.from(newArr)
    return Arr.sort().join('')
}

// 먼저 소문자화 시킨다. 
// 소문자화 한 현재 상태는 그냥 문자열
// 이 문자열로 배열을 만든다. (왜냐, sort는 배열이 아니면 적용이 안되니까)
// 만든 배열에 sort를 먹여서 오름차순 정리를 한다. (이 때 상황은 아직 문자열이 배열화된 상태)
// 요기에 이제 join을 먹이면 원래의 문자열로 돌아온다. 끝. 