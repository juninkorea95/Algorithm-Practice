function solution(s){
    let countP = 0;
    let countY = 0;
    
    let newLetter = s.toUpperCase().split('')
    for (let i=0; i < newLetter.length; i++) {
        if (newLetter[i] === 'P') {
            countP++
        }
       if (newLetter[i] === 'Y') {
            countY++
        }
    } return (countP === countY) ? true : false
}