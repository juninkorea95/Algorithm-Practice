function solution(my_string, letter) {
    let new_string = my_string.split(letter).join('')
    return new_string
}