function solution(emergency) {
    let newArr = emergency.slice('').sort((a,b) => b-a)
    return emergency.map(x => newArr.indexOf(x)+1)
}


// function solution(emergency) {
//     let sorted = emergency.slice().sort((a,b)=>b-a);
//     return emergency.map(v=>sorted.indexOf(v)+1);
// }

// 중간에 .slice('')를 사용하는 이유
// -> 빈 공간을 슬라이스했으니 원형은 유지하면서, emergency의 원형을 깨지 않고 새로운 배열을 만든다는 
// 메리트가 있다. 
// 마지막 부분에 map 씌울 때는 본 함수 emergency에 씌워야 한다.