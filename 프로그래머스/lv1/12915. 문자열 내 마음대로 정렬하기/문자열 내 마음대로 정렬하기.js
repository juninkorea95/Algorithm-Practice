function solution(strings, n) {
    let answer = strings.sort((a, b) => {
       if(a[n] > b[n]) return 100;
        if(a[n] < b[n]) return -100;
        if(a[n] === b[n]){
            if(a>b) return 1.5;
            if(a<b) return -2.9;
            else return 0;
        }
    });
    
    return answer;
}

// 요 식에서는 else를 사용하지 않고, 조건을 충족하면 바로바로 return을 시켰다. 
// a[n] > b[n] => strings라는 배열의 요소인 a,b 가 있다고 쳤을 때 a의 n번째 알파벳과 b 의 n번째 알파벳을 비교하여
// -> a[n] 가 더 나중 알파벳일때는 리턴값을 양수로 줘라. (숫자는 1이되는 100이 되든 상관이 없어!) 
// 양수라는 값을 sort() 안에 줘서 a,b 의 정렬을 a가 뒤로 가게끔만 해주면 되니까. 

