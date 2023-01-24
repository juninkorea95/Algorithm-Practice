function solution(my_string, num1, num2) {
    let Arr = my_string.split('')
    let a = Arr[num1];
    Arr[num1] = Arr[num2];  // value num1 converts to num2 
    Arr[num2] = a           // num2 takes the value from let a = Arr[num1]
    return Arr.join('')
    
}

// 두 원소 순서바꾸기 식 두줄 왜 저렇게 전개되는지 좀 더 알아봐야함.

// function solution(my_string, num1, num2) {
//     my_string = my_string.split('');
//     [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
//     return my_string.join('');
// }