function solution(age) {
    const A = ['a','b','c','d','e','f','g','h','i','j']
    let answer = []
    let Arr = age.toString().split('')
    let newArr = Arr.map(a => parseInt(a))
    return newArr.map(x => A[x]).join('')
}

// newArr[i] -> A[i]