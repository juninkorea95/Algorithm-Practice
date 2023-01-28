function solution(s) {
    let small = []
    let big = [] 
    let A = s.split('')
    for (element of s) (element === element.toUpperCase()) ? big.push(element) : small.push(element)
    let newArr = small.sort((a,b) => {
        if (a>b) {return -1};
        if (a<b) {return 1};
        return 0;
    }).join('')
    let newArr2 = big.sort((a,b) => {
        if (a>b) {return -1};
        if (a<b) {return 1};
        return 0;
    }).join('')
    return (newArr + newArr2)
}

// function solution(s) {
//   return s
//     .split("")
//     .sort()
//     .reverse()
//     .join("");
//     console.log(s)
// }

// 메소드 기본기 사용의 정석 같은 문제다!! 잘 복습하자! 

