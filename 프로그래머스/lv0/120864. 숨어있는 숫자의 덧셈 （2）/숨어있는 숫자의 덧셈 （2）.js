function solution(my_string) {
    var a = 0
    var answer = my_string.match(/\d+/g);
    if(answer == null) return 0 
    for(let i=0;i<answer.length;i++){
        a += +answer[i]
    }
    return a ? a : 0;
}