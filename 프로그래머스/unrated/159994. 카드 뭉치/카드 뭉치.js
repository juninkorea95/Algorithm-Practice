// function solution(cards1, cards2, goal) {
//     let result = ''
//     let arr = goal.filter(x => !cards2.includes(x))
//     let arr2 = goal.filter(x =>!cards1.includes(x))
    
//     for (let i = 0; i < cards1.length; i++) {
//         if (cards1[i] !== arr[i]) {
//            result = 'No'
//         } else {
//             if(cards2[i] !== arr2[i]) {
//                 result = 'No'
//             } else {
//                 result = 'Yes'
//             }
//         } 
//     }
//     return result
// }

function solution(cards1, cards2, goal) {

    for(const s of goal) {

        if(cards1[0] == s) {
            cards1.shift();
        } else if(cards2[0] == s) {
            cards2.shift();
        } else {
            return "No"
        }
    }

    return "Yes";
}