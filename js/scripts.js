function romanNumeral(number) {
    let result = "";
    let count = 0;
    // subtracting 1 from length so that we get the index
    let length1 = parseInt(number.length) - 1;
    let numberInput = parseInt(number);
  //	console.log("Initial number: " + number + "length: " + length1);
  // index of "1" = 0 index of "10" = 1 
  // numberInput = 3
  
    for (let index = length1; index>=0; index--) {
        for (let digit = 1; digit <= numberInput; digit++) {
       if (numberInput >0 && numberInput <=3) {
          result += "I";
        //count++;
        console.log("Within the if: " + result);
      } else if  (numberInput === 4){
          result = "IV";
      } else if (numberInput === 5){
      result = "V";
     } else if (numberInput === 6) {
     result = "VI";
     }
      console.log(result);
      return result;
    }
  }
}