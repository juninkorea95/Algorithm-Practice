function solution(num_list, n) {
let division = n
let result = [];

for(i=0; i<num_list.length; i += division) {
    result.push(num_list.slice(i, i + division));
    } return result                                   
}