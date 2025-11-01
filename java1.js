function generateRandom(maxLimit = 100){
  let rand = Math.random() * maxLimit;
  console.log(rand); //

  rand = Math.floor(rand); // 99

  return rand;
}
generateRandom(10);

for (let element=0; element<10; element++) {
    if (element*2 -1 < generateRandom(10))
        console.log("odd:", generateRandom(10));
    else if (element -1 < generateRandom(10))
        console.log("even:",generateRandom(10));
    else if (element*2 -1 > generateRandom(10))
        console.log("odd:", generateRandom(10));
    else if (element -1 > generateRandom(10))
        console.log("even:",generateRandom(10));
    }


//How would you make it all odds?
//Start with y = x
//Try plugging in numbers in a graphing calculator
//add an intercept?
//add slope?
for (let element=0; element<10; element++) {
  //write the function here?
  //Or read the code to find the answer?
  
    }

//How would you make it all even?
for (let element=0; element<10; element++) {
  //write the function here?
  //Or read the code to find the answer?
  
    }


