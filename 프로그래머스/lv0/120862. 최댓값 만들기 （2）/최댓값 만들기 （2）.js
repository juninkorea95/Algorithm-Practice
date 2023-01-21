function solution(numbers) {
    let newArr = numbers.sort((a,b) => a-b)
    if (newArr[0] * newArr[1] > newArr[newArr.length-1] * newArr[newArr.length-2]) {
        return newArr[0] * newArr[1]
    } else {
        return newArr[newArr.length-1] * newArr[newArr.length-2]
    }
}