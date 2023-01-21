function solution(cipher, code) {
    let newArr = []
    let Arr = [...cipher]
    for (let i=0; i < Arr.length; i++) {
        if ((i+1) % code === 0) {
            newArr.push(Arr[i])
        }
    } return newArr.join('')
}