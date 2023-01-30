function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';
 
    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower; // 본체는 문자열 upper인데 소문자 애들만 소문자로 전환시켜줌 
        var index = textArr.indexOf(text)+n;
        console.log(index)
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}