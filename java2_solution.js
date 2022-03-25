//Copyright © 2022 david gae some right reserved

function generateRandom(maxLimit = 100){
  let rand = Math.random() * maxLimit;
  //console.log(rand); //

  rand = Math.floor(rand); // 99

  return rand;
}
//why does this not work?
//it is because you are loop the values of this function generateRandom
//max value is not defined.
//for (let element=0; element<=10000; element++) {
//    if ( generateRandom(10) == element.Max_Value )	
//		console.log(element.Max_Value); //
//    }
//solution
//define a limit of number 
//then find the max. 
let element = [100, 0, 10000]
console.log(Math.max(...element));
