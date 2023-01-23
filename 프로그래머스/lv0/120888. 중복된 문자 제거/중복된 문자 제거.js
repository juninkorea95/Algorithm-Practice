function solution(my_string) {
  let answer = [...my_string].filter((a,i) => my_string.indexOf(a) === i).join("")
  return answer
}