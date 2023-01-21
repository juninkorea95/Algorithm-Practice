function solution(my_string) {
    let aaa = /[^0-9]/g;
    let newArr = my_string.replace(aaa, "")
    let newArr2 = newArr.split('').sort((a,b) => a-b)
    return newArr2.map(a => Number(a))
}
                     
// 문자열만 없애는 정규식을 구글링해서 적용한 뒤 선언
// 문자, 숫자 섞인 배열에서 replace 써서 문자열 삭제
// 숫자만 남은 문자열 자체는 메소드를 못쓰므로 일단 split 해서 배열처럼 만든다.
// sort() 메소도 이용해서 오름차순 정리
// 그러면 이제 문자처럼 처리된 숫자가 들어간 배열이 완성이 되는데, 각 요소를 다시 문자 -> 숫자로 돌려놔야 함.
// 그래서 for문 돌려서 map() 사용하여 각 요소를 parseInt 사용해서 숫자로 바꿈. 