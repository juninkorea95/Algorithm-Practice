function solution(N, stages) {
    let answer =[];
    let people = stages.length;
    
    for (let i=1; i <= N+1; i++) {
        
        let stagePeople = stages.filter(x => x===i).length;
        answer.push([i, stagePeople / people])
        people -= stagePeople
    } // console.log(answer) // [각 단계, 실패율]을 묶은 이차원 배열 완성
    
    answer.pop()
    
    answer.sort((a,b) => b[1]-a[1])
    
    return answer.map(a =>a[0])
    
}

// 1. 빈 배열 answer을 정의한다.
// 2. 인원수를 정의하는 people을 선언한다. 이 people은 실패율을 구할 때 활용되며, 초기값은 모든 도전자인 stages의 길이로 둠.
// 3. for문을 돌린다. 범위는 게임 단계+1 로 두는데, 그 이유는 다 깬 참가자의 결과값이 N+1 로 나오기 때문에 일단 계산에 넣자.
// 4. stagePeople이라는 변수를 두고, [단계, 실패율]로 묶인 배열을 원소로 갖게끔 만드는 것을 목표로 둔다. 
// 5. 일단 for문 안에서 filter를 써서 1부터 점차 커지는 값 i 와 stages[i]가 같은 원소를 필터링한 후, 뒤에 length를 붙여
//    실패한 사람이 단계별로 몇명인지만 추려낸다.
// 6. 처음에 빈 배열로 만들어 두었던 answer에 배열을 원소로 집어넣기 시작한다.
// 7. 집어넣는 방법은 [스테이지 레벨, 실패율] 을 정보로 담아 answer 배열의 원소로 집어넣는거다. 
// 8. 계산이 끝났으면 실패한 사람은 전체 인원에서 빼줘야 한다. 그래야 for문이 돌면서 올바른 전체 인원 값을 넣을 수 있다. 
// 9. 다 계산이 끝났으면 answer에는 원소가 [레벨, 실패율]이 예쁘게 적혀있을거다. 여기서 마지막 원소를 없앤다. -> 막판까지 깬       사람이기 때문에 answer에 들어갈 필요가 없다. 
// 10. 이차원배열의 원소 1번째 인덱스 값이 실패율이기 때문에 이것을 기준으로 내림차순 정리를 적용한다.
// 11. 이제는 실패율이 높은 순으로 정리가 되었을거다. 필요한 건 스테이지 레벨만 갖고 오면 된다.
// 12. map을 이용하여 이차원 배열의 원소 0번째 값만 가져오면 끝!

// function solution(N, stages) {
//     let answer = [];
		
//     let people = stages.length //실패한 사람은 제외해야되기 떄문에 임시 변수 people생성
//     for (let i = 1; i <= N+1; i++) {
				
//         let stagePeople = stages.filter(x => x === i).length // --> 각 단계에 사람이 몇명 있는지 추출 가능 
//         // console.log(stagePeople)
				
//         answer.push([i, stagePeople / people]) //answer = [[스테이지, 실패율]]
// 		people -= stagePeople  
//         // i가 한번 돌면서 i값과 같은 값을 지닌 사람 수 구해서 전체 인원으로 나눠 실패율을 구한다
//         // 한차례 계산이 끝나면 계산이 끝난 인원은 전체 인원수에서 빼준다.
//         // ex) 1과 같은 값 가진 인원 찾아! -> 1명 -> 전체 인원으로 나눠 -> 1/8 실패율 도출 완성!
//         // 이제 1명은 실패율 구했으니 전체 인원에서 빠져 -> 전체 인원 -= 아까 계산된 1명 
//         // 이제 7명 중에서 2 가진 애들 찾아 -> 2명 -> 실패율은 2/7.. 이런식으로 반복된다.
//     } 
		
//     answer.pop() //마지막은 모두 깬사람들이므로 실패율이 없어서 pop()
	
//     answer = answer.sort((a,b) => b[1] - a[1]) 	//answer의 2번째 원소기준으로 내림차순으로 정렬
    
//     return answer.map( a => a[0]);   //Array.map() : 배열을 조건에 맞게 변환
// }