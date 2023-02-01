function solution(n, lost, reserve) {
    let answer = n - lost.length;
    
    let realLost = lost.filter(x => !reserve.includes(x))
    let realReserve = reserve.filter(v => !lost.includes(v))
    
    answer += lost.length - realLost.length;
    
    realLost.sort((a,b) => a-b)
    
    realLost.forEach ((l) => {
        
        if (realReserve.length === 0) {
            return;
        }
        
        if (realReserve.includes(l-1)) {
            realReserve = realReserve.filter(v => v!== l-1)
            answer++
        } 
        
        else if (realReserve.includes(l+1)) {
            realReserve = realReserve.filter(v => v!== l+1)
            answer++
        }
        
    })
    
    return answer;
    
}



// 흐름 정리 
// 1. 최종 정답을 전체 학생수에서 '잃어버림' 배열의 원소 수를 빼는 것으로 두자 
// 2. 첫번째 필터링 : '여벌' 배열에 잃어버림 배열의 원소가 포함된다면 그걸 걸러내자 (포함 안되는 놈만 빠져나오게끔)
// 3. 두번째 필터링 : 역으로 '잃어버림' 배열에 '여벌' 원소가 포함된다면 그것도 걸러내자 
// 4. 필터는 원배열을 변환하지 않으므로 첫번째, 두번째 필터링을 거친 두 배열에 새 변수를 할당해서 저장해둬야한다!
// 5. answer의 정의도 바꿔주자, 전체 학생수에서 '진짜 잃어버림' 배열 원소 수를 뺀 수로 바꿔 정의하자 
// 6. for each, if 문 사용하여 ㄹㅇ 여벌 배열 길이가 0이라면 그냥 return; 누르고 if문을 종료시킨다. -> 원래의 answer값 도출
// 7. if 문 써서 만약 리얼로스트 원소 -1 이 ㄹㅇ리저브 원소에 포함된다면, ㄹㅇ리저브 해당 원소를 지워라 (필터 사용) 그리고 answer는 +!
// 8. if문 ㅆ서 만약 리얼로스트 원소 +1 이 ㄹㅇ리저브 원소에 포함된다면, ㄹㅇ리저브 해당 원소를 지워라 (필터 사용) 그리고 answer ++
// 9. 모든 과정 끝나고 answer 리턴하면 끝. 

// function solution(n, lost, reserve) {
//     var answer = n-lost.length;
//     // 처음 가능한 학생수 = n - lost.length
//     // lost 배열 앞뒤의 값을 reserve에 포함되어있는지를 확인 -> 해당값을 reserve에서 뺌 + answer++
//     // 왜 정렬을 해줘야 하지? - [4,2], [3,5]와 같은 케이스 때문
    
//     let realLost=lost.filter((l)=>!reserve.includes(l));
//     let realReserve=reserve.filter((r)=>!lost.includes(r));
//     answer+=lost.length-realLost.length;
    
//     // 여기까지의 흐름. 자기꺼 잃어버리고 자기꺼 여분 입는 애들을 걸러주고, answer역시 숫자를 잠깐 조정함 
//     // 사실상 lost, reserve를 모조리 realLost, realReserve로 바꾸는 작업을 한거임 ㅇㅇ 
    
//     realLost.sort((a,b)=>a-b); // 잃어버린 번호 오름차순 정렬 
    
//     realLost.forEach((l)=>{
//         if(realReserve.length===0){
//             return;         
//         }
        
//     // 잃어버린 명단에 숫자 없으면 그냥 통과          
        
//         if(realReserve.includes(l-1)){
//             realReserve=realReserve.filter((r)=>r!==l-1);
//             answer++;
//         }
        
//     // 여벌 명단에 잃어버림 명단 원소 -1 이 있을 때 -> filter을 사용하여 걸러주자 / 그리고 answer ++
        
//         else if(realReserve.includes(l+1)){
//             realReserve=realReserve.filter((r)=>r!==l+1);
//             answer++;
//         }
    
//     // 위에 해당 사항 없을 경우 여벌 명단에 잃어버림 명단 원소 +1 이 있을 때 -> filter을 사용하여 걸러주자 / 그리고 answer ++
        
//     })
//     return answer;
// }

