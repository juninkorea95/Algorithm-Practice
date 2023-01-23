function solution(bin1, bin2) {
    let A = parseInt(bin1,2).toString(10)
    let B = parseInt(bin2,2).toString(10)
    let newArr = [A,B].map(x => parseInt(x))
    return (newArr[0]+newArr[1]).toString(2)
}