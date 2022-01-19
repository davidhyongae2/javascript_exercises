function generateRandom(maxLimit = 100){
  let rand = Math.random() * maxLimit;
  //console.log(rand); //

  rand = Math.floor(rand); // 99

  return rand;
}

for (let element=0; element<10; element++) {
    if (generateRandom(10)>= element*2)
        console.log("even:", element*2);
   else if (generateRandom(10)>= element*2-1)
        console.log("odd:",element*2-1);
    }


//how would you make it add odds?
for (let element=0; element<10; element++) {
        console.log("even:", element*2);

    }
//how would you make it all even?
for (let element=0; element<10; element++) {
        console.log("odd:",element*2-1);

    }


