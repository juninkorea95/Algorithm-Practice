function solution(babbling) {
  const patterns = ["aya", "ye", "woo", "ma"];
  let arr = [];

  babbling.map(element => {
    let modifiedElement = element;
    let foundPattern = true;

    while (foundPattern) {
      foundPattern = false;

      for (const pattern of patterns) {
        if (modifiedElement.startsWith(pattern)) {
          modifiedElement = modifiedElement.replace(pattern, "");
          foundPattern = true;
          break;
        }
      }
    }

    arr.push(modifiedElement);
  });

 let result = 0;
arr.forEach(x => {
  if (x === "") {
    result += 1;
  }
});
return result;
    
    
}






