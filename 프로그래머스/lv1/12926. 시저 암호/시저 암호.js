function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';
 
    for(var i =0; i <s.length; i++){
        var text = s[i];
        // console.log(text)
        if(text === ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower; 
        // 본체는 문자열 upper인데 s[i] 값이 대문자면 그대로, 소문자면 통째로 upper를 lower로 바꿔준다. 는 의미의 식
        var index = (textArr.indexOf(text)) + n; 
        console.log(textArr)
        // 지금 result의 들어갈 값을 textArr에서 가져와야 한다. (textArr에서 인덱스 뽑아서 + n 할거니까)
        // textArr에서 가져올거니까 얘의 인덱스를 정의할 변수가 필요하다. 그게 위의 index다. 
        // console.log(index)
        if(index >= textArr.length) index = index - textArr.length;
        answer += textArr[index];
        // console.log(textArr[index])
    }
    return answer;
}