// function solution(s) {
//     let result = []
//     let Arr = s.split('')
//     for (i=0; i<Arr.length; i++) {
//         if (i % 2 ===0) {
//             result.push(Arr[i].toUpperCase())
//         } else {
//             result.push(Arr[i].toLowerCase())
//         }
//     } return result.join('')
// }

// 문자열을 split하여 배열을 만든다
// for문을 돌려 i가 짝수면 빈 배열 result에 대문자화한 알파벳 푸시
// i가 홀수면 result에 소문자화 한 알파벳 푸시
// 배열이니까 다시 문자열로 돌리기 위해 join 사용

function solution(s) {
    var array = s.split(' ');
    var result ="";
    var result2 = [];


    array.forEach(function(item){
        for(let i = 0; i<item.length; i++){
            if(i%2==0){
                result += item[i].toUpperCase()
            }else{
                result += item[i].toLowerCase()
            }
        }
        result2.push(result) ;
        result = "";
    })
    let answer = result2.join([" "]);
    return answer;
}