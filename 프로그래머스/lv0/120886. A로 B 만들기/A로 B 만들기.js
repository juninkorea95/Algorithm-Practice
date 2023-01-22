function solution(before, after) {
    let Arr1 = before.split('').sort().join('')
    let Arr2 = after.split('').sort().join('')
    return (Arr1 === Arr2) ? 1 : 0  
}